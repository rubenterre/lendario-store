// Carro de compra en cliente. Solo guarda id + cantidad; precios y nombres salen del catálogo.
export interface Linea {
  id: string;
  qty: number;
}

const CLAVE = 'lendario:carro:v1';
const MAX = 99;
const oíntes = new Set<() => void>();

function ler(): Linea[] {
  try {
    const bruto = JSON.parse(localStorage.getItem(CLAVE) ?? '[]');
    if (!Array.isArray(bruto)) return [];
    return bruto
      .filter((l) => typeof l?.id === 'string' && Number.isInteger(l.qty) && l.qty > 0)
      .map((l) => ({ id: l.id as string, qty: Math.min(l.qty as number, MAX) }));
  } catch {
    return [];
  }
}

let lineas = ler();

function notificar() {
  oíntes.forEach((f) => f());
}
function gardar() {
  try {
    localStorage.setItem(CLAVE, JSON.stringify(lineas));
  } catch {
    /* modo privado o almacenamiento lleno: el carro vive solo en memoria */
  }
  notificar();
}

// Sincroniza varias pestañas (gl/es incluidas)
window.addEventListener('storage', (e) => {
  if (e.key === CLAVE) {
    lineas = ler();
    notificar();
  }
});

export const obterLineas = (): Linea[] => lineas.map((l) => ({ ...l }));

export function engadir(id: string, n = 1) {
  const l = lineas.find((x) => x.id === id);
  if (l) l.qty = Math.min(MAX, l.qty + n);
  else lineas.push({ id, qty: Math.min(MAX, n) });
  gardar();
}

export function quitar(id: string) {
  lineas = lineas.filter((l) => l.id !== id);
  gardar();
}

export function fixarCantidade(id: string, qty: number) {
  if (qty <= 0) return quitar(id);
  const l = lineas.find((x) => x.id === id);
  if (l) {
    l.qty = Math.min(MAX, qty);
    gardar();
  }
}

export function baleirar() {
  lineas = [];
  gardar();
}

/** Se llama al instante y en cada cambio. Devuelve la función para cancelar. */
export function subscribirse(f: () => void) {
  oíntes.add(f);
  f();
  return () => oíntes.delete(f);
}
