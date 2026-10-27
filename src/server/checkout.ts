// Crea una sesión de Stripe Checkout. Usa solo APIs web estándar (fetch/Request/Response),
// así que sirve igual en Netlify, Cloudflare, Vercel o Node.
// Los precios salen SIEMPRE del catálogo del servidor; del navegador solo se aceptan id + cantidad.
import { produtos } from '../data/produtos';
import { ENVIO_GRATIS_DESDE, ENVIO_TARIFA, ZONA_DISPONIBLE } from '../data/envio';

export interface CheckoutEnv {
  STRIPE_SECRET_KEY?: string;
  /** Dominio público para success/cancel URL. Si falta se usa el origen de la petición. */
  SITE_URL?: string;
  /** Países de envío (ISO-2) separados por comas. Por defecto: ES. */
  STRIPE_SHIPPING_COUNTRIES?: string;
  /** "true" genera una factura pagada (PDF) por pedido. Stripe cobra un 0,4 % extra (máx. 2 USD) por factura. */
  STRIPE_INVOICES?: string;
}

const MAX_LINEAS = 10;
const MAX_POR_DEFECTO = 99;

const NOMBRE_ENVIO = {
  gratis: { gl: 'Envío gratuito', es: 'Envío gratuito' },
  tarifa: { gl: 'Envío estándar', es: 'Envío estándar' },
} as const;

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' },
  });

const lista = (v: string | undefined) =>
  (v ?? '').split(',').map((s) => s.trim()).filter(Boolean);

export async function handleCheckout(request: Request, env: CheckoutEnv): Promise<Response> {
  if (request.method !== 'POST') return json({ error: 'method_not_allowed' }, 405);
  if (!env.STRIPE_SECRET_KEY) return json({ error: 'not_configured' }, 503);

  const origenPeticion = new URL(request.url).origin;
  const base = new URL(env.SITE_URL || origenPeticion).origin;
  const origen = request.headers.get('Origin');
  if (origen && origen !== base && origen !== origenPeticion) return json({ error: 'forbidden' }, 403);
  if (!request.headers.get('Content-Type')?.includes('application/json')) return json({ error: 'bad_request' }, 415);

  let datos: any;
  try {
    datos = await request.json();
  } catch {
    return json({ error: 'bad_request' }, 400);
  }

  const lang = datos?.lang === 'es' ? 'es' : 'gl';
  // Canarias, Ceuta y Melilla: sin envío por ahora (el navegador ya lo impide; esto lo garantiza en el servidor).
  if (datos?.zona !== ZONA_DISPONIBLE) return json({ error: 'zone_unavailable' }, 400);
  const items: unknown[] = Array.isArray(datos?.items) ? datos.items : [];

  const cantidades = new Map<string, number>();
  for (const it of items as any[]) {
    const p = produtos.find((x) => x.id === it?.id);
    if (!p || !Number.isInteger(it?.qty) || it.qty < 1) return json({ error: 'invalid_items' }, 400);
    if (p.agotado) return json({ error: 'sold_out', id: p.id }, 409);
    cantidades.set(p.id, (cantidades.get(p.id) ?? 0) + it.qty);
  }
  if (cantidades.size === 0 || cantidades.size > MAX_LINEAS) return json({ error: 'invalid_items' }, 400);

  const f = new URLSearchParams();
  f.set('mode', 'payment');
  f.set('locale', 'es'); // Stripe Checkout no ofrece gallego

  let i = 0;
  for (const [id, qty] of cantidades) {
    const p = produtos.find((x) => x.id === id)!;
    if (qty > (p.max ?? MAX_POR_DEFECTO)) return json({ error: 'over_limit', id }, 409);
    f.set(`line_items[${i}][quantity]`, String(qty));
    f.set(`line_items[${i}][price_data][currency]`, 'eur');
    f.set(`line_items[${i}][price_data][unit_amount]`, String(p.prezo));
    f.set(`line_items[${i}][price_data][product_data][name]`, p.nome[lang]);
    if (p.eyebrow) f.set(`line_items[${i}][price_data][product_data][description]`, p.eyebrow[lang]);
    i++;
  }

  const paises = lista(env.STRIPE_SHIPPING_COUNTRIES ?? 'ES').map((c) => c.toUpperCase());
  paises.forEach((c, n) => f.set(`shipping_address_collection[allowed_countries][${n}]`, c));
  // El importe del envío se calcula siempre aquí, a partir del catálogo del servidor.
  const subtotal = [...cantidades].reduce((t, [id, q]) => t + produtos.find((x) => x.id === id)!.prezo * q, 0);
  const gratis = subtotal >= ENVIO_GRATIS_DESDE;
  f.set('shipping_options[0][shipping_rate_data][type]', 'fixed_amount');
  f.set('shipping_options[0][shipping_rate_data][display_name]', NOMBRE_ENVIO[gratis ? 'gratis' : 'tarifa'][lang]);
  f.set('shipping_options[0][shipping_rate_data][fixed_amount][amount]', String(gratis ? 0 : ENVIO_TARIFA));
  f.set('shipping_options[0][shipping_rate_data][fixed_amount][currency]', 'eur');
  f.set('phone_number_collection[enabled]', 'true');

  const ruta = lang === 'es' ? '/es' : '';
  f.set('success_url', `${base}${ruta}/gracias/?session_id={CHECKOUT_SESSION_ID}`);
  f.set('cancel_url', `${base}${ruta}/#edicions`);

  const resumen = [...cantidades].map(([id, q]) => `${id}:${q}`).join(',');
  f.set('metadata[items]', resumen);
  // Aparece en el panel de Stripe y en los avisos de pago: qué se ha vendido de un vistazo.
  f.set('payment_intent_data[description]', `Lendario · ${resumen}`);
  f.set('payment_intent_data[metadata][items]', resumen);

  // Factura pagada opcional (PDF). Requiere que la clave tenga permisos de Facturas y Clientes.
  if (env.STRIPE_INVOICES === 'true') {
    f.set('invoice_creation[enabled]', 'true');
    f.set('invoice_creation[invoice_data][description]', 'Pedido Lendario');
    f.set('invoice_creation[invoice_data][metadata][items]', resumen);
  }
  f.set('metadata[lang]', lang);
  f.set('metadata[zona]', ZONA_DISPONIBLE);

  const r = await fetch('https://api.stripe.com/v1/checkout/sessions', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${env.STRIPE_SECRET_KEY}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: f,
  });
  const sesion: any = await r.json().catch(() => null);
  if (!r.ok || typeof sesion?.url !== 'string') {
    console.error('[checkout] Stripe', r.status, sesion?.error?.message);
    return json({ error: 'stripe_error' }, 502);
  }
  return json({ url: sesion.url });
}
