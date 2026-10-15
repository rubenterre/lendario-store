import type { Lang } from '../i18n/ui';

export interface SeccionPolitica {
  id: string;
  titulo: string;
  p?: string[];
  ul?: string[];
  /** Párrafos que van después de la lista. */
  p2?: string[];
  /** Muestra el correo y los datos legales de la tienda al final de la sección. */
  mostrarContacto?: boolean;
  /** Texto de ejemplo para copiar (formulario de desistimiento). */
  modelo?: string;
}

export interface Politicas {
  eyebrow: string;
  titulo: string;
  intro: string;
  actualizado: string;
  contacto: string;
  secciones: SeccionPolitica[];
}

export const politicas: Record<Lang, Politicas> = {
  gl: {
    eyebrow: 'Condicións de venda',
    titulo: 'Políticas da tenda',
    intro:
      'Aquí explicamos como funcionan os pedidos, os envíos, as devolucións e a garantía de Lendario, para que saibas con claridade que esperar antes de comprar.',
    actualizado: 'Última actualización',
    contacto: 'Contacto',
    secciones: [
      {
        id: 'pedidos',
        titulo: 'Pedidos e pagamento',
        p: [
          'Os prezos están en euros e inclúen o IVE. O prezo final, cos gastos de envío, amósase antes de confirmar o pagamento.',
          'O pagamento procésase a través de Stripe, un servizo seguro. Lendario non ve nin garda os datos da túa tarxeta. Cando o pagamento se complete, recibirás a confirmación por correo electrónico.',
          'Cada edición ten unha tirada limitada. Se unha edición se esgota, non se completará o pedido desa edición e devolverémosche o importe.',
        ],
      },
      {
        id: 'envios',
        titulo: 'Envíos',
        p: [
          'Os envíos fanse a través de transportista á dirección que indiques ao pagar. Actualmente enviamos a España.',
          'O envío é gratuíto nos pedidos de 19,90 € ou máis. Nos pedidos de menor importe, o envío custa 5,95 € (IVE incluído). O importe aparece antes de confirmar o pagamento.',
          'Preparamos o pedido unha vez confirmado o pagamento. Se non acordamos outra data contigo, entregarémolo como máximo en 30 días naturais desde o día seguinte á compra.',
          'Se o pedido tarda máis do previsto ou ten algún problema de transporte, escríbenos e axudarémosche a resolvelo.',
        ],
      },
      {
        id: 'desistimento',
        titulo: 'Dereito de desistimento e devolucións',
        p: [
          'Tes 14 días naturais desde que recibes o pedido para desistir da compra, sen necesidade de dar ningún motivo.',
          'Para facelo, comunícanos a túa decisión por correo electrónico indicando o número do pedido e o teu nome. Podes usar o modelo que aparece máis abaixo ou calquera outra declaración clara.',
          'Despois de avisarnos, tes outros 14 días para enviar o produto de volta. Os gastos de devolución correrán por túa conta.',
          'Devolveremos todo o importe pagado, incluído o envío inicial estándar, no prazo máximo de 14 días desde que nos comuniques a túa decisión. Podemos esperar a recibir o produto ou a proba do seu envío antes de reembolsar. O reembolso faise co mesmo medio de pago da compra, e o banco pode tardar uns días en amosalo.',
          'Devolve o produto completo e en bo estado. Se o manipulaches máis do necesario para comprobar como é, podemos descontar a perda de valor do produto.',
        ],
        modelo:
          'A/á atención de Lendario: comunico que desisto do contrato de venda do seguinte produto: [produto e edición]. Pedido nº [número] feito o [data] e recibido o [data]. Nome: [nome e apelidos]. Enderezo: [enderezo]. Data: [data].',
      },
      {
        id: 'excepcions',
        titulo: 'Produtos sen dereito de desistimento',
        p: [
          'O dereito de desistimento non se aplica aos produtos feitos segundo as túas indicacións ou claramente personalizados, como unha dedicatoria ou un nome incluídos no pedido. Se unha edición ou complemento ofrece esa opción, indicarémolo antes de comprar.',
        ],
      },
      {
        id: 'garantia',
        titulo: 'Garantía e produtos danados',
        p: [
          'Os produtos novos teñen unha garantía legal de 3 anos desde a entrega. Se chega con algún defecto ou non coincide co descrito, terás dereito a que o reparemos ou o substituamos e, se non for posible, á rebaixa do prezo ou á devolución do importe.',
          'Se o pedido chega danado polo transporte, escríbenos o antes posible cunhas fotos do produto e da caixa, e atenderémoste sen custo.',
        ],
      },
      {
        id: 'contacto',
        mostrarContacto: true,
        titulo: 'Contacto e reclamacións',
        p: [
          'Para calquera dúbida, devolución ou reclamación sobre un pedido, escríbenos indicando o número do pedido. Respondemos o antes posible.',
        ],
      },
    ],
  },
  es: {
    eyebrow: 'Condiciones de venta',
    titulo: 'Políticas de la tienda',
    intro:
      'Aquí explicamos cómo funcionan los pedidos, los envíos, las devoluciones y la garantía de Lendario, para que sepas con claridad qué esperar antes de comprar.',
    actualizado: 'Última actualización',
    contacto: 'Contacto',
    secciones: [
      {
        id: 'pedidos',
        titulo: 'Pedidos y pago',
        p: [
          'Los precios están en euros e incluyen el IVA. El precio final, con los gastos de envío, se muestra antes de confirmar el pago.',
          'El pago se procesa a través de Stripe, un servicio seguro. Lendario no ve ni guarda los datos de tu tarjeta. Cuando el pago se complete, recibirás la confirmación por correo electrónico.',
          'Cada edición tiene una tirada limitada. Si una edición se agota, no se completará el pedido de esa edición y te devolveremos el importe.',
        ],
      },
      {
        id: 'envios',
        titulo: 'Envíos',
        p: [
          'Los envíos se hacen mediante transportista a la dirección que indiques al pagar. Actualmente enviamos a España.',
          'El envío es gratuito en los pedidos de 19,90 € o más. En los pedidos de menor importe, el envío cuesta 5,95 € (IVA incluido). El importe aparece antes de confirmar el pago.',
          'Preparamos el pedido una vez confirmado el pago. Si no acordamos otra fecha contigo, lo entregaremos como máximo en 30 días naturales desde el día siguiente a la compra.',
          'Si el pedido tarda más de lo previsto o tiene algún problema de transporte, escríbenos y te ayudaremos a resolverlo.',
        ],
      },
      {
        id: 'desistimiento',
        titulo: 'Derecho de desistimiento y devoluciones',
        p: [
          'Tienes 14 días naturales desde que recibes el pedido para desistir de la compra, sin necesidad de dar ningún motivo.',
          'Para hacerlo, comunícanos tu decisión por correo electrónico indicando el número de pedido y tu nombre. Puedes usar el modelo que aparece más abajo o cualquier otra declaración clara.',
          'Después de avisarnos, tienes otros 14 días para devolver el producto. Los gastos de devolución corren por tu cuenta.',
          'Te devolveremos todo el importe pagado, incluido el envío inicial estándar, en un máximo de 14 días desde que nos comuniques tu decisión. Podemos esperar a recibir el producto o la prueba de su envío antes de reembolsar. El reembolso se hace con el mismo medio de pago de la compra, y el banco puede tardar unos días en reflejarlo.',
          'Devuelve el producto completo y en buen estado. Si lo has manipulado más de lo necesario para comprobar cómo es, podemos descontar la pérdida de valor del producto.',
        ],
        modelo:
          'A la atención de Lendario: comunico que desisto del contrato de venta del siguiente producto: [producto y edición]. Pedido nº [número] realizado el [fecha] y recibido el [fecha]. Nombre: [nombre y apellidos]. Dirección: [dirección]. Fecha: [fecha].',
      },
      {
        id: 'excepciones',
        titulo: 'Productos sin derecho de desistimiento',
        p: [
          'El derecho de desistimiento no se aplica a los productos hechos según tus indicaciones o claramente personalizados, como una dedicatoria o un nombre incluidos en el pedido. Si una edición o complemento ofrece esa opción, lo indicaremos antes de comprar.',
        ],
      },
      {
        id: 'garantia',
        titulo: 'Garantía y productos dañados',
        p: [
          'Los productos nuevos tienen una garantía legal de 3 años desde la entrega. Si llega con algún defecto o no coincide con lo descrito, tendrás derecho a que lo reparemos o lo sustituyamos y, si no es posible, a la rebaja del precio o a la devolución del importe.',
          'Si el pedido llega dañado por el transporte, escríbenos lo antes posible con fotos del producto y de la caja, y te atenderemos sin coste.',
        ],
      },
      {
        id: 'contacto',
        mostrarContacto: true,
        titulo: 'Contacto y reclamaciones',
        p: [
          'Para cualquier duda, devolución o reclamación sobre un pedido, escríbenos indicando el número de pedido. Respondemos lo antes posible.',
        ],
      },
    ],
  },
};
