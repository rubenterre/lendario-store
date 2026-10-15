// @ts-check
import { defineConfig } from 'astro/config';
import { loadEnv } from 'vite';

// En producción /api/checkout lo sirve netlify/functions/checkout.mts (Netlify).
// En `astro dev` lo simulamos con el mismo código para poder probar en local.
const checkoutDev = () => ({
  name: 'checkout-dev',
  hooks: {
    'astro:server:setup': ({ server }) => {
      const env = { ...process.env, ...loadEnv('development', process.cwd(), '') };
      server.middlewares.use('/api/checkout', async (req, res) => {
        const trozos = [];
        for await (const t of req) trozos.push(t);
        const headers = new Headers();
        for (const [k, v] of Object.entries(req.headers)) if (typeof v === 'string') headers.set(k, v);
        const sinCuerpo = req.method === 'GET' || req.method === 'HEAD';
        const request = new Request(`http://${req.headers.host}/api/checkout`, {
          method: req.method,
          headers,
          body: sinCuerpo ? undefined : Buffer.concat(trozos),
        });
        const { handleCheckout } = await server.ssrLoadModule('/src/server/checkout.ts');
        const r = await handleCheckout(request, env);
        res.statusCode = r.status;
        r.headers.forEach((v, k) => res.setHeader(k, v));
        res.end(Buffer.from(await r.arrayBuffer()));
      });
    },
  },
});

// https://astro.build/config
export default defineConfig({
  integrations: [checkoutDev()],
  // Dominio definitivo (lendario.gal). Se puede sobrescribir con SITE_URL (hreflang y canonical necesitan URL absolutas).
  site: process.env.SITE_URL ?? 'https://lendario.gal',
  i18n: {
    defaultLocale: 'gl',
    locales: ['gl', 'es'],
    routing: {
      prefixDefaultLocale: false, // gl en "/", es en "/es/"
    },
  },
});
