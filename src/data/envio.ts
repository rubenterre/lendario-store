/** Envío (céntimos, IVA incluido). Lo usan el carrito (para mostrarlo) y el servidor (para cobrarlo). */
export const ENVIO_GRATIS_DESDE = 1990;
export const ENVIO_TARIFA = 595;

/** Zonas a las que se envía. El resto (Canarias, Ceuta y Melilla) no está disponible por ahora. */
export const ZONA_DISPONIBLE = 'peninsula';

export const envioPara = (subtotal: number) => (subtotal >= ENVIO_GRATIS_DESDE ? 0 : ENVIO_TARIFA);
