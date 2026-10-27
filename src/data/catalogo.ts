// Catálogo SIN imágenes: lo importan también las funciones de Netlify (esbuild no sabe leer .webp).
// Las imágenes se asocian por id en produtos.ts.
import type { Lang } from '../i18n/ui';


type Texto = Record<Lang, string>;

export interface ProdutoBase {
  id: string;
  tipo: 'edicion' | 'libros' | 'complemento';
  nome: Texto;
  /** Etiqueta pequena sobre o nome (p. ex. "Edición base") */
  eyebrow?: Texto;
  descricion: Texto;
  /** Lista "Que inclúe" */
  inclue?: Record<Lang, string[]>;
  /** Céntimos de euro, IVE incluído */
  prezo: number;
  /** Máximo por pedido (la tirada es de 20 unidades por edición) */
  max?: number;
  /** Agotado: bloquea el botón, el carro, el servidor (/api/checkout) y marca OutOfStock en el JSON-LD. Poner a true y desplegar. */
  agotado?: boolean;
  alt: Texto;
  /** Texto de la cinta del medallón provisional */
  insignia?: Texto;
  /** Muestra la etiqueta "Inclúe o libro" */
  destacado?: boolean;
  /** Índice de la línea de "Que inclúe" que se resalta */
  inclueRealzado?: number;
}

const descricionBaralla: Texto = {
  gl: 'Lendario é unha baralla española de 40 cartas na que cada figura do mazo tradicional se converte nun ser da mitoloxía galega. Mouros, mouras, meigas, trasnos, o Urco, a Coca e a saga de Breogán axudan a descubrir un imaxinario que segue vivo na tradición oral de Galicia.',
  es: 'Lendario es una baraja española de 40 cartas en la que cada figura del mazo tradicional se convierte en un ser de la mitología gallega. Moros, moras, meigas, trasnos, el Urco, la Coca y la saga de Breogán ayudan a descubrir un imaginario que sigue vivo en la tradición oral de Galicia.',
};

export const catalogo: ProdutoBase[] = [
  {
    id: 'aprendiz-druida',
    tipo: 'edicion',
    nome: { gl: 'Druída Aprendiz', es: 'Druida Aprendiz' },
    eyebrow: { gl: 'Edición base', es: 'Edición base' },
    descricion: descricionBaralla,
    inclue: {
      gl: [
        'Baralla completa de 40 cartas, ilustradas e con definicións breves.',
        'Caixa metálica ilustrada.',
        'Grimorio Lendario en versión dixital.',
      ],
      es: [
        'Baraja completa de 40 cartas, ilustradas y con definiciones breves.',
        'Caja metálica ilustrada.',
        'Grimorio Lendario en versión digital.',
      ],
    },
    prezo: 1990,
    max: 0,
    alt: {
      gl: 'Edición Druída Aprendiz: medallón do aprendiz',
      es: 'Edición Druida Aprendiz: medallón del aprendiz',
    },
    insignia: { gl: 'Aprendiz', es: 'Aprendiz' },
  },
  {
    id: 'bardo-lendario',
    tipo: 'edicion',
    nome: { gl: 'Bardo Lendario', es: 'Bardo Lendario' },
    eyebrow: { gl: 'Edición premium', es: 'Edición premium' },
    descricion: descricionBaralla,
    inclue: {
      gl: [
        'Baralla completa de 40 cartas, ilustradas e con definicións breves.',
        'Caixa metálica ilustrada.',
        'Grimorio Lendario en versión impresa.',
      ],
      es: [
        'Baraja completa de 40 cartas, ilustradas y con definiciones breves.',
        'Caja metálica ilustrada.',
        'Grimorio Lendario en versión impresa.',
      ],
    },
    prezo: 2990,
    max: 0,
    destacado: true,
    inclueRealzado: 2,
    alt: {
      gl: 'Edición Bardo Lendario: medallón do bardo',
      es: 'Edición Bardo Lendario: medallón del bardo',
    },
    insignia: { gl: 'Bardo', es: 'Bardo' },
  },
  {
    id: 'libro',
    tipo: 'libros',
    nome: { gl: 'Libro Grimorio Lendario', es: 'Libro Grimorio Lendario' },
    descricion: { gl: 'Publicación impresa de mitos, lendas e seres de Lendario', es: 'Publicación impresa de mitos, leyendas y seres de Lendario' },
    prezo: 990,
    max: 20,
    alt: { gl: 'Libro editorial A5 de Lendario', es: 'Libro editorial A5 de Lendario' },
  },
    {
    id: 'destino-viquingo',
    tipo: 'libros',
    nome: { gl: 'Libro Destino viquingo', es: 'Libro Destino viquingo' },
    descricion: { gl: 'Un libro para descubrir a presenza dos viquingos en Galicia. Outra proposta do autor de Lendario para seguir explorando o pasado do noso país.', es: 'Un libro para descubrir la presencia de los vikingos en Galicia. Otra propuesta del autor de Lendario para seguir explorando el pasado de nuestro país.' },
    prezo: 1300,
    max: 10,
    alt: { gl: 'Libro Destino viquingo', es: 'Libro Destino viquingo' },
  },
  {
    id: 'pegatinas',
    tipo: 'complemento',
    nome: { gl: 'Pegatinas de seres lendarios', es: 'Pegatinas de seres lendarios' },
    descricion: {
      gl: 'Pack de 6 pegatinas cos seres da mitoloxía galega de Lendario.',
      es: 'Pack de 6 pegatinas con los seres de la mitología gallega de Lendario.',
    },
    prezo: 400,
    max: 5,
    alt: { gl: 'Pack de 6 pegatinas de seres lendarios', es: 'Pack de 6 pegatinas de seres lendarios' },
  },
  {
    id: 'chaveiro-moura',
    tipo: 'complemento',
    nome: { gl: 'Chaveiro de A Moura', es: 'Llavero de A Moura' },
    descricion: {
      gl: 'Chaveiro co deseño de A Moura, un dos seres da mitoloxía galega de Lendario.',
      es: 'Llavero con el diseño de A Moura, uno de los seres de la mitología gallega de Lendario.',
    },
    prezo: 300,
    max: 5,
    alt: { gl: 'Chaveiro co deseño de A Moura', es: 'Llavero con el diseño de A Moura' },
  }
];
