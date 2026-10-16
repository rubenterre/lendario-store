// @ts-check
import { defineConfig } from 'astro/config';
import { loadEnv } from 'vite';
import { readdirSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';

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

const newsletterDev = () => ({
  name: 'newsletter-dev',
  hooks: {
    'astro:server:setup': ({ server }) => {
      const env = { ...process.env, ...loadEnv('development', process.cwd(), '') };
      server.middlewares.use('/api/newsletter', async (req, res) => {
        const trozos = [];
        for await (const t of req) trozos.push(t);
        const headers = new Headers();
        for (const [k, v] of Object.entries(req.headers)) if (typeof v === 'string') headers.set(k, v);
        const sinCuerpo = req.method === 'GET' || req.method === 'HEAD';
        const request = new Request(`http://${req.headers.host}/api/newsletter`, {
          method: req.method,
          headers,
          body: sinCuerpo ? undefined : Buffer.concat(trozos),
        });
        const { handleNewsletter } = await server.ssrLoadModule('/src/server/newsletter.ts');
        const r = await handleNewsletter(request, env);
        res.statusCode = r.status;
        r.headers.forEach((v, k) => res.setHeader(k, v));
        res.end(Buffer.from(await r.arrayBuffer()));
      });
    },
  },
});

// Sitemap sin dependencias: al terminar el build recorre dist/, lee canonical y hreflang de cada página
// y salta las que llevan noindex. Genera dist/sitemap.xml.
const sitemapPropio = () => ({
  name: 'sitemap-propio',
  hooks: {
    'astro:build:done': ({ dir }) => {
      const raiz = fileURLToPath(dir);
      const archivos = [];
      const andar = (d) => {
        for (const n of readdirSync(d)) {
          const p = join(d, n);
          if (statSync(p).isDirectory()) andar(p);
          else if (n === 'index.html') archivos.push(p);
        }
      };
      andar(raiz);
      const esc = (t) => t.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
      const vistas = new Map();
      for (const f of archivos) {
        const html = readFileSync(f, 'utf-8');
        if (/<meta[^>]*name="robots"[^>]*noindex/.test(html)) continue;
        const loc = html.match(/<link rel="canonical" href="([^"]+)"/)?.[1];
        if (!loc || vistas.has(loc)) continue;
        const alts = [...html.matchAll(/<link rel="alternate" hreflang="([^"]+)" href="([^"]+)"/g)].map((m) => [m[1], m[2]]);
        vistas.set(loc, alts);
      }
      const filas = [...vistas.entries()]
        .sort(([a], [b]) => a.localeCompare(b))
        .map(([loc, alts]) => {
          const links = alts.map(([l, h]) => `    <xhtml:link rel="alternate" hreflang="${l}" href="${esc(h)}"/>`).join('\n');
          return `  <url>\n    <loc>${esc(loc)}</loc>${links ? '\n' + links : ''}\n  </url>`;
        });
      const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${filas.join('\n')}\n</urlset>\n`;
      writeFileSync(join(raiz, 'sitemap.xml'), xml);
    },
  },
});

// https://astro.build/config
export default defineConfig({
  integrations: [checkoutDev(), newsletterDev(), sitemapPropio()],
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
