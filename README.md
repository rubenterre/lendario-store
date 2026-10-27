# Lendario · tienda y web

Web oficial y tienda de **Lendario**, una baraja española de 40 cartas en la que cada figura del mazo tradicional se convierte en un ser de la mitología gallega. Sirve para jugar a la brisca o al tute y, de paso, descubrir quién anda por el monte cuando cae la noche.

Sitio en producción: [lendario.gal](https://lendario.gal)

![Astro](https://img.shields.io/badge/Astro-BC52EE?logo=astro&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-%E2%89%A522.12-5FA04E?logo=nodedotjs&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS-663399?logo=css&logoColor=white)
![Markdown](https://img.shields.io/badge/Markdown-000000?logo=markdown&logoColor=white)
![Stripe](https://img.shields.io/badge/Stripe-635BFF?logo=stripe&logoColor=white)
![Brevo](https://img.shields.io/badge/Brevo-0B996E?logo=brevo&logoColor=white)
![Netlify](https://img.shields.io/badge/Netlify-00C7B7?logo=netlify&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-181717?logo=github&logoColor=white)
![Idiomas](https://img.shields.io/badge/idiomas-gl%20%7C%20es-2f6f4f)
![Último commit](https://img.shields.io/github/last-commit/rubenterre/lendario-store)

## Qué incluye

- **Web bilingüe** en gallego (por defecto, en `/`) y castellano (`/es/`), con `canonical`, `hreflang` y sitemap propio generado al construir.
- **Tienda con carrito** en el navegador y pago con [Stripe Checkout](https://docs.stripe.com/payments/checkout). El carrito solo guarda `id` y cantidad; los precios, el envío y el stock se validan siempre en el servidor.
- **Boletín** con doble confirmación a través de [Brevo](https://www.brevo.com/).
- **Blog** con colecciones de contenido de Astro (Markdown).
- **Páginas legales**: aviso legal, política de privacidad, condiciones de compra y créditos.
- **Datos estructurados** (JSON-LD) de producto y organización.

## Tecnologías

| Área | Tecnología |
|---|---|
| Framework | [Astro](https://astro.build) 7, TypeScript en modo estricto |
| Contenido | Markdown y colecciones de contenido de Astro |
| Pagos | Stripe Checkout, llamado con `fetch` desde el servidor (sin SDK) |
| Boletín | Brevo, endpoint de doble confirmación (DOI) |
| Alojamiento | Netlify (sitio estático + Netlify Functions) |
| Dependencias | Solo `astro`. El resto son APIs web estándar |

## Estructura

```text
.
├── netlify/functions/      # Funciones de Netlify: checkout.mts y newsletter.mts
├── public/                 # Favicons, fuentes, vídeo, _headers y robots.txt
├── src/
│   ├── assets/             # Imágenes optimizadas por Astro
│   ├── components/         # Secciones, carrito, ficha de producto y blog
│   ├── content/blog/       # Entradas del blog en Markdown
│   ├── data/               # Productos, envío y textos legales
│   ├── i18n/               # Textos y utilidades gl/es
│   ├── layouts/
│   ├── lib/                # Carrito (cliente) y JSON-LD
│   ├── pages/              # Rutas en gallego y en /es/
│   ├── server/             # Lógica de checkout y boletín (APIs web estándar)
│   └── styles/
├── astro.config.mjs        # i18n, simulación de /api/* en local y sitemap
└── netlify.toml
```

La lógica de `src/server/` usa solo `fetch`, `Request` y `Response`. Las funciones de `netlify/functions/` son un envoltorio fino que le pasa las variables de entorno. En `astro dev`, `astro.config.mjs` sirve los mismos endpoints para probar sin Netlify.

## Puesta en marcha

Requiere Node.js 22.12 o superior.

```sh
npm install
cp .env.example .env   # rellena los valores (ver más abajo)
npm run dev            # http://localhost:4321
```

| Comando | Acción |
|---|---|
| `npm run dev` | Servidor de desarrollo, con `/api/checkout` y `/api/newsletter` simulados |
| `npm run build` | Genera el sitio en `dist/` junto con `sitemap.xml` |
| `npm run preview` | Sirve `dist/` en local |

## Variables de entorno

Copia `.env.example` a `.env` (está en `.gitignore`). En producción van en *Netlify → Site configuration → Environment variables*. Ninguna lleva el prefijo `PUBLIC_`.

| Variable | Uso |
|---|---|
| `STRIPE_SECRET_KEY` | Clave de Stripe. En local usa una clave de **test** |
| `SITE_URL` | Dominio público para las URL de éxito y cancelación. Déjala vacía en local y en los deploy previews |
| `STRIPE_SHIPPING_COUNTRIES` | Países de envío (ISO-2, separados por comas). Por defecto `ES` |
| `STRIPE_INVOICES` | `true` genera una factura pagada (PDF) por pedido. Stripe cobra un 0,4 % extra por factura |
| `BREVO_API_KEY` | Clave de API de Brevo |
| `BREVO_LIST_ID` | ID numérico de la lista del boletín |
| `BREVO_DOI_TEMPLATE_ID` | ID numérico de la plantilla de doble confirmación |
| `BREVO_LANG_ATTRIBUTE` | Opcional: atributo de Brevo donde guardar el idioma |

## Catálogo, stock y envío

- Los productos y sus precios (en céntimos, IVA incluido) están en `src/data/produtos.ts`.
- Cada producto puede llevar `max` (unidades máximas por pedido) y `agotado: true`. Al marcarlo y desplegar, se bloquea el botón, se quita del carrito, `/api/checkout` lo rechaza con `409 sold_out` y el JSON-LD pasa a `OutOfStock`. El stock es manual: no cuenta ventas.
- El envío se define en `src/data/envio.ts`: gratis desde 19,90 € y 2,50 € por debajo de ese importe. Solo península; Canarias, Ceuta y Melilla no están disponibles por ahora.

## Despliegue

El sitio se despliega en Netlify desde este repositorio.

1. En Netlify, *Add new site → Import an existing project* y selecciona el repositorio.
2. Comprueba que el comando sea `npm run build` y el directorio de publicación `dist` (ya están en `netlify.toml`, con `NODE_VERSION = "22"`).
3. Define las variables de entorno. Limita `SITE_URL` al contexto de Producción.
4. En *Domain management*, añade `lendario.gal` y configura el DNS.
5. Para recibir avisos de pago y recibos, activa en el panel de Stripe los recibos al cliente y los avisos de pago (*Settings → Emails* y *Notifications*).

## Contenido

Los textos sobre los seres de la mitología gallega se redactan de forma sintética y respetuosa con la tradición, y se apoyan en fuentes de la cultura gallega. Los créditos del proyecto están en la página [Créditos](https://lendario.gal/creditos/).

## Contacto

Consulta los datos de contacto en el [aviso legal](https://lendario.gal/aviso-legal/) del sitio.
