import { produtos } from '../data/produtos';
import { tenda } from '../data/tenda';
import { useTranslations, localizedPath } from '../i18n/utils';
import type { Lang } from '../i18n/ui';

const absoluta = (ruta: string, site: URL) => new URL(ruta, site).href;

/** Organización (tienda online) y sitio web: se emiten en todas las páginas. */
export function basico(lang: Lang, site: URL) {
  const t = useTranslations(lang);
  const raiz = absoluta('/', site);
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'OnlineStore',
      '@id': `${raiz}#organizacion`,
      name: 'Lendario',
      url: raiz,
      logo: absoluta('/og-lendario.png', site),
      image: absoluta('/og-lendario.jpg', site),
      description: t('site.description'),
      email: tenda.email || undefined,
      areaServed: { '@type': 'Country', name: 'ES' },
      sameAs: tenda.instagram ? [`https://www.instagram.com/${tenda.instagram}/`] : undefined,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      '@id': `${raiz}#web`,
      name: 'Lendario',
      url: absoluta(localizedPath(lang, '/'), site),
      inLanguage: lang,
      publisher: { '@id': `${raiz}#organizacion` },
    },
  ];
}

/** Productos del catálogo (precio y nombre salen de produtos.ts). */
export function catalogo(lang: Lang, site: URL) {
  const raiz = absoluta('/', site);
  const pagina = absoluta(localizedPath(lang, '/'), site);
  return produtos.map((p) => ({
    '@context': 'https://schema.org',
    '@type': 'Product',
    '@id': `${pagina}#${p.id}`,
    name: p.nome[lang],
    description: p.descricion[lang] || undefined,
    image: p.imaxe ? absoluta(p.imaxe, site) : absoluta('/og-lendario.jpg', site),
    brand: { '@type': 'Brand', name: 'Lendario' },
    offers: {
      '@type': 'Offer',
      url: pagina,
      price: (p.prezo / 100).toFixed(2),
      priceCurrency: 'EUR',
      availability: p.agotado ? 'https://schema.org/OutOfStock' : 'https://schema.org/InStock',
      seller: { '@id': `${raiz}#organizacion` },
      eligibleRegion: { '@type': 'Country', name: 'ES' },
    },
  }));
}

export const serializar = (datos: unknown) => JSON.stringify(datos).replace(/</g, '\\u003c');
