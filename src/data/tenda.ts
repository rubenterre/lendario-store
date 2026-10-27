/**
 * Datos de la tienda que se muestran en las políticas.
 * mientras estén vacíos, no se muestran en la página.
 */
export const tenda = {
  email: 'info@rubenterre.com', 
  titular: 'Rubén Terré', // nombre o razón social
  nif: '36177347A',
  enderezo: 'Praza de Europa, 14, 4B 15707 Santiago de Compostela (A Coruña), Galicia', // dirección postal para devoluciones/reclamaciones
  actualizado: '2026-10-14',
  autor: 'Rubén Terré', // línea legal del pie
  instagram: 'lendario_naipes', // usuario sin @ (comprobar)
} as const;
