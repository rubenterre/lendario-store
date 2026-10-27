import type { ProdutoBase } from './catalogo';
import { catalogo } from './catalogo';
import chaveiroMoura from '../assets/images/produtos/chaveiro-moura.webp';
import pegatinas from '../assets/images/produtos/pegatinas.webp';
import destinoViquingo from '../assets/images/produtos/destino-viquingo.webp';
import grimarioLendario from '../assets/images/produtos/grimario_lendario_libro.webp';
import edicionAprendiz from '../assets/images/produtos/Ediciones_lendarias_aprendiz.webp';
import edicionBardo from '../assets/images/produtos/Ediciones_lendarias_bardo.webp';

export type { ProdutoBase };
export interface Produto extends ProdutoBase {
  /** Imagen (medallón/producto): ruta en /public o URL. null = medallón provisional en CSS */
  imaxe: string | null;
}

const imaxes: Record<string, string> = {
  'aprendiz-druida': edicionAprendiz.src,
  'bardo-lendario': edicionBardo.src,
  'libro': grimarioLendario.src,
  'destino-viquingo': destinoViquingo.src,
  'pegatinas': pegatinas.src,
  'chaveiro-moura': chaveiroMoura.src,
};

export const produtos: Produto[] = catalogo.map((p) => ({ ...p, imaxe: imaxes[p.id] ?? null }));

export const edicions = produtos.filter((p) => p.tipo === 'edicion');
export const libros = produtos.filter((p) => p.tipo === 'libros');
export const complementos = produtos.filter((p) => p.tipo === 'complemento');
