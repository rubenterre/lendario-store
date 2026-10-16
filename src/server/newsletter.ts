// Alta en el boletín: recibe el correo del formulario propio y lo envía a Brevo con doble confirmación (DOI).
// La clave de API vive solo en el servidor. Usa solo APIs web estándar (fetch/Request/Response).

export interface NewsletterEnv {
  BREVO_API_KEY?: string;
  /** ID numérico de la lista de Brevo a la que se añade el contacto confirmado. */
  BREVO_LIST_ID?: string;
  /** ID numérico de la plantilla de doble confirmación (debe llevar el enlace {{ params.DOIurl }}). */
  BREVO_DOI_TEMPLATE_ID?: string;
  /** Opcional: nombre del atributo de texto de Brevo donde guardar el idioma (p. ej. IDIOMA). */
  BREVO_LANG_ATTRIBUTE?: string;
  SITE_URL?: string;
}

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' },
  });

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export async function handleNewsletter(request: Request, env: NewsletterEnv): Promise<Response> {
  if (request.method !== 'POST') return json({ error: 'method_not_allowed' }, 405);

  const listId = Number(env.BREVO_LIST_ID);
  const templateId = Number(env.BREVO_DOI_TEMPLATE_ID);
  if (!env.BREVO_API_KEY || !Number.isInteger(listId) || !Number.isInteger(templateId)) {
    return json({ error: 'not_configured' }, 503);
  }

  const origenPeticion = new URL(request.url).origin;
  // Solo en local devolvemos el detalle del error de Brevo (nunca en producción).
  const local = ['localhost', '127.0.0.1'].includes(new URL(request.url).hostname);
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

  // Campo señuelo: las personas no lo ven; si viene relleno es un bot. Respondemos "ok" sin hacer nada.
  if (typeof datos?.web === 'string' && datos.web.trim() !== '') return json({ ok: true });

  const email = typeof datos?.email === 'string' ? datos.email.trim().toLowerCase() : '';
  if (email.length > 254 || !EMAIL.test(email)) return json({ error: 'invalid_email' }, 400);
  if (datos?.consent !== true) return json({ error: 'consent_required' }, 400);

  const lang = datos?.lang === 'es' ? 'es' : 'gl';
  const ruta = lang === 'es' ? '/es' : '';

  const cuerpo: Record<string, unknown> = {
    email,
    includeListIds: [listId],
    templateId,
    redirectionUrl: `${base}${ruta}/boletin-confirmado/`,
  };
  if (env.BREVO_LANG_ATTRIBUTE) cuerpo.attributes = { [env.BREVO_LANG_ATTRIBUTE]: lang };

  let r: Response;
  try {
    r = await fetch('https://api.brevo.com/v3/contacts/doubleOptinConfirmation', {
      method: 'POST',
      headers: { 'api-key': env.BREVO_API_KEY, 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(cuerpo),
      signal: AbortSignal.timeout(8000),
    });
  } catch (e) {
    console.error('Brevo DOI fetch falló:', e instanceof Error ? e.message : e);
    return json({ error: 'upstream_error', ...(local ? { detail: `fetch: ${e instanceof Error ? e.message : e}` } : {}) }, 502);
  }

  if (r.ok) return json({ ok: true });

  // Contacto ya existente: respondemos igual que si fuera nuevo (no revelamos quién está suscrito).
  const detalle: any = await r.json().catch(() => ({}));
  if (r.status === 400 && detalle?.code === 'duplicate_parameter') return json({ ok: true });

  console.error('Brevo DOI error', r.status, detalle?.code ?? '', detalle?.message ?? '');
  return json({ error: 'upstream_error', ...(local ? { detail: `${r.status} ${detalle?.code ?? ''} ${detalle?.message ?? ''}`.trim() } : {}) }, 502);
}
