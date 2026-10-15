import type { Lang } from '../i18n/ui';

type Texto = Record<Lang, string>;

export interface Produto {
  id: string;
  tipo: 'edicion' | 'complemento';
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
  /** Imagen (medallón/producto): ruta en /public o URL. null = medallón provisional en CSS */
  imaxe: string | null;
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

export const produtos: Produto[] = [
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
    max: 20,
    imaxe: null,
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
    max: 20,
    destacado: true,
    inclueRealzado: 2,
    imaxe: null,
    alt: {
      gl: 'Edición Bardo Lendario: medallón do bardo',
      es: 'Edición Bardo Lendario: medallón del bardo',
    },
    insignia: { gl: 'Bardo', es: 'Bardo' },
  },
  {
    id: 'libro',
    tipo: 'complemento',
    nome: { gl: 'Libro editorial A5', es: 'Libro editorial A5' },
    descricion: { gl: '', es: '' },
    prezo: 990,
    imaxe: null,
    alt: { gl: 'Libro editorial A5 de Lendario', es: 'Libro editorial A5 de Lendario' },
  },
  {
    id: 'saquino',
    tipo: 'complemento',
    nome: { gl: 'Saquiño de algodón', es: 'Saquito de algodón' },
    descricion: { gl: '', es: '' },
    prezo: 390,
    imaxe: null,
    alt: { gl: 'Saquiño de algodón con cordón', es: 'Saquito de algodón con cordón' },
  },
  {
    id: 'numeracion',
    tipo: 'complemento',
    nome: { gl: 'Numeración e selo de exemplar', es: 'Numeración y sello de ejemplar' },
    descricion: { gl: '', es: '' },
    prezo: 200,
    imaxe: null,
    alt: { gl: 'Selo de exemplar numerado', es: 'Sello de ejemplar numerado' },
  },
];

export const edicions = produtos.filter((p) => p.tipo === 'edicion');
export const complementos = produtos.filter((p) => p.tipo === 'complemento');
