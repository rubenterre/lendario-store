import { ui, defaultLang, languages, type Lang, type UiKey } from './ui';

export { languages, defaultLang };
export type { Lang };

export const langs = Object.keys(languages) as Lang[];

export function getLangFromUrl(url: URL): Lang {
  const [, first] = url.pathname.split('/');
  return (langs as string[]).includes(first) && first !== defaultLang ? (first as Lang) : defaultLang;
}

export function useTranslations(lang: Lang) {
  return (key: UiKey): string => ui[lang][key] ?? ui[defaultLang][key];
}

/** Ruta sin prefijo de idioma: "/es/foo" -> "/foo" */
export function stripLang(pathname: string): string {
  const stripped = pathname.replace(/^\/es(?=\/|$)/, '');
  return stripped === '' ? '/' : stripped;
}

/** Ruta de una página en un idioma concreto. */
export function localizedPath(lang: Lang, basePath = '/'): string {
  if (lang === defaultLang) return basePath;
  return basePath === '/' ? `/${lang}/` : `/${lang}${basePath}`;
}

/** URLs absolutas de todas las versiones de la página actual (para hreflang). */
export function getAlternates(url: URL, site: URL | undefined) {
  const base = stripLang(url.pathname);
  const origin = site ?? url;
  return langs.map((lang) => ({
    lang,
    href: new URL(localizedPath(lang, base), origin).href,
  }));
}

export function formatPrice(cents: number, lang: Lang): string {
  const locale = lang === 'gl' ? 'gl-ES' : 'es-ES';
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 2,
  }).format(cents / 100);
}
