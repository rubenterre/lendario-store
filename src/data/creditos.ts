import type { Lang } from '../i18n/ui';
import type { Politicas } from './politicas';
import { tenda } from './tenda';

export const creditos: Record<Lang, Politicas> = {
  gl: {
    eyebrow: 'Quen está detrás',
    titulo: 'Créditos',
    intro: 'Lendario nace do agarimo pola mitoloxía galega. Isto é o que fai posible a baralla e esta web.',
    actualizado: 'Última actualización',
    contacto: 'Contacto',
    secciones: [
      {
        id: 'proxecto',
        titulo: 'Proxecto',
        p: [`Lendario é un proxecto de ${tenda.autor}: a baralla, os textos e esta web forman parte da mesma obra.`],
      },
      {
        id: 'ilustracions',
        titulo: 'Ilustracións e imaxes',
        p: [
          'As ilustracións e as imaxes de Lendario son © Lendario, salvo indicación contraria. Foron creadas con Adobe Photoshop e Adobe Firefly (ferramenta de intelixencia artificial xerativa) e seguen unha guía de estilo propia: fantasía editorial inspirada no granito, os castros, as mámoas e a néboa galegos, con espirais e círculos concéntricos de petróglifo como motivo recorrente.',
        ],
      },
      {
        id: 'fontes',
        titulo: 'Fontes sobre mitoloxía galega',
        p: ['Os seres da baralla descríbense con palabras propias, a partir de obras e sitios de divulgación sobre a mitoloxía galega, entre eles:'],
        ul: [
          'Galicia Encantada (galiciaencantada.com).',
          'Fantasía Celta, de David Tebras (davidtebras.com).',
          'Mundo Estrella Galicia (mundoestrellagalicia.es) e o blog de Mundo-R (blog.mundo-r.com).',
          'Galizia, de Giorno Pagano Memoria (giornopaganomemoria.it).',
          'Wikipedia, en galego («Mitoloxía galega») e en inglés («Galician mythology»), baixo licenza CC BY-SA.',
        ],
        p2: ['Estas lendas pertencen á tradición oral de Galicia e a todas as persoas que as foron contando.'],
      },
      {
        id: 'tipografias',
        titulo: 'Tipografías',
        ul: [
          'Alice, de Ksenia Erulevich (Cyreal), baixo a licenza SIL Open Font License 1.1.',
          'Martego, empregada nos títulos, con licenza de Envato Elements.',
        ],
      },
      {
        id: 'tecnoloxia',
        titulo: 'Tecnoloxía',
        ul: [
          'Web feita con Astro, un framework de código aberto con licenza MIT.',
          'Pagamentos seguros procesados por Stripe.',
        ],
      },
      {
        id: 'correccions',
        titulo: 'Correccións e atribucións',
        p: ['Se detectas un erro ou cres que falta unha atribución, escríbenos e corrixiremolo.'],
        mostrarContacto: true,
      },
    ],
  },
  es: {
    eyebrow: 'Quién está detrás',
    titulo: 'Créditos',
    intro: 'Lendario nace del cariño por la mitología gallega. Esto es lo que hace posible la baraja y esta web.',
    actualizado: 'Última actualización',
    contacto: 'Contacto',
    secciones: [
      {
        id: 'proyecto',
        titulo: 'Proyecto',
        p: [`Lendario es un proyecto de ${tenda.autor}: la baraja, los textos y esta web forman parte de la misma obra.`],
      },
      {
        id: 'ilustraciones',
        titulo: 'Ilustraciones e imágenes',
        p: [
          'Las ilustraciones y las imágenes de Lendario son © Lendario, salvo indicación contraria. Han sido creadas con Adobe Photoshop y Adobe Firefly (herramienta de inteligencia artificial generativa) y siguen una guía de estilo propia: fantasía editorial inspirada en el granito, los castros, las mámoas y la niebla gallegos, con espirales y círculos concéntricos de petroglifo como motivo recurrente.',
        ],
      },
      {
        id: 'fuentes',
        titulo: 'Fuentes sobre mitología gallega',
        p: ['Los seres de la baraja se describen con palabras propias, a partir de obras y sitios de divulgación sobre la mitología gallega, entre ellos:'],
        ul: [
          'Galicia Encantada (galiciaencantada.com).',
          'Fantasía Celta, de David Tebras (davidtebras.com).',
          'Mundo Estrella Galicia (mundoestrellagalicia.es) y el blog de Mundo-R (blog.mundo-r.com).',
          'Galizia, de Giorno Pagano Memoria (giornopaganomemoria.it).',
          'Wikipedia, en gallego («Mitoloxía galega») y en inglés («Galician mythology»), bajo licencia CC BY-SA.',
        ],
        p2: ['Estas leyendas pertenecen a la tradición oral de Galicia y a todas las personas que las fueron contando.'],
      },
      {
        id: 'tipografias',
        titulo: 'Tipografías',
        ul: [
          'Alice, de Ksenia Erulevich (Cyreal), bajo la licencia SIL Open Font License 1.1.',
          'Martego, empleada en los títulos, con licencia de Envato Elements.',
        ],
      },
      {
        id: 'tecnologia',
        titulo: 'Tecnología',
        ul: [
          'Web hecha con Astro, un framework de código abierto con licencia MIT.',
          'Pagos seguros procesados por Stripe.',
        ],
      },
      {
        id: 'correcciones',
        titulo: 'Correcciones y atribuciones',
        p: ['Si detectas un error o crees que falta una atribución, escríbenos y lo corregiremos.'],
        mostrarContacto: true,
      },
    ],
  },
};
