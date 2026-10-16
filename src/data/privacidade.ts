import type { Lang } from '../i18n/ui';
import type { Politicas } from './politicas';

export const privacidade: Record<Lang, Politicas> = {
  gl: {
    eyebrow: 'Datos persoais',
    titulo: 'Política de privacidade',
    intro:
      'Explicamos que datos teus tratamos cando compras en Lendario, para que os usamos, con quen os compartimos e que dereitos tes, conforme ao Regulamento (UE) 2016/679 (RGPD) e á Lei Orgánica 3/2018.',
    actualizado: 'Última actualización',
    contacto: 'Contacto',
    secciones: [
      {
        id: 'responsable',
        titulo: 'Responsable do tratamento',
        p: [
          'O responsable dos teus datos é Lendario, a tenda online da baralla da mitoloxía galega. Estes son os nosos datos de contacto:',
        ],
        mostrarContacto: true,
      },
      {
        id: 'datos',
        titulo: 'Que datos tratamos',
        p: ['Só tratamos os datos necesarios para xestionar a túa compra:'],
        ul: [
          'Datos do pedido que introduces na páxina de pagamento de Stripe: nome, correo electrónico, enderezo de envío, teléfono, produtos e importe.',
          'Datos do pagamento: Stripe procésaos directamente e Lendario non ve nin garda o número da túa tarxeta.',
          'Datos técnicos de conexión, como o enderezo IP e o tipo de navegador, que rexistra o servidor da web por motivos de seguridade e funcionamento.',
          'Datos do carro de compra, que se gardan só no teu dispositivo.',
        ],
        p2: ['Non temos rexistro de usuarios, formularios de contacto nin boletín nesta web.'],
      },
      {
        id: 'finalidades',
        titulo: 'Para que os usamos',
        ul: [
          'Xestionar o teu pedido: cobrar, preparar e enviar a compra, e atender devolucións, garantías e consultas. Base xurídica: execución do contrato de compra (art. 6.1.b RGPD).',
          'Cumprir as obrigas fiscais e contables, como emitir facturas e conservar os rexistros. Base xurídica: obriga legal (art. 6.1.c RGPD).',
          'Previr fraude e garantir a seguridade dos pagamentos e da web. Base xurídica: interese lexítimo (art. 6.1.f RGPD).',
        ],
        p2: [
          'Non enviamos comunicacións comerciais sen o teu consentimento previo, non vendemos os teus datos nin tomamos decisións automatizadas con efectos sobre ti.',
        ],
      },
      {
        id: 'boletin',
        titulo: 'Boletín',
        p: [
          'Se te subscribes ao boletín, tratamos o teu correo electrónico para enviarche novidades sobre Lendario, como o lanzamento da baralla, adiantos das cartas e contido do blog. Base xurídica: o teu consentimento (art. 6.1.a RGPD), que podes retirar en calquera momento.',
        ],
        ul: [
          'Usamos dobre confirmación: só te engadimos á lista cando confirmas o teu correo coa ligazón da mensaxe que che enviamos.',
          'Cada envío incluí unha ligazón para darte de baixa.',
          'Conservamos o teu correo mentres sigas subscrito ou subscrita; se te das de baixa, deixamos de enviarche comunicacións.',
        ],
      },
      {
        id: 'destinatarios',
        titulo: 'Con quen os compartimos',
        ul: [
          'Stripe, para procesar o pagamento e detectar fraude. Stripe pode tratar certos datos como responsable propio; a súa política está en stripe.com/es/privacy.',
          'A empresa de transporte, que recibe o teu nome, enderezo e teléfono para entregar o pedido.',
          'Netlify, que aloxa a web e executa o proceso de pago.',
          'Brevo (Francia), que xestiona a lista do boletín e o envío dos correos, se te subscribes.',
          'A xestoría ou asesoría fiscal que nos axude coa contabilidade, e as administracións públicas cando a lei o esixa.',
        ],
        p2: [
          'Algúns destes provedores, como Stripe e Netlify, poden tratar datos fóra do Espazo Económico Europeo. Neses casos apóianse nas garantías que a normativa recoñece, como as cláusulas contractuais tipo da UE.',
        ],
      },
      {
        id: 'conservacion',
        titulo: 'Canto tempo os conservamos',
        p: [
          'Conservamos os datos do pedido mentres sexa necesario para atender devolucións, garantías e reclamacións. Despois mantemos só os datos fiscais e contables durante o prazo legal, que pode chegar a 6 anos, e bloqueámolos ata que se borren.',
        ],
      },
      {
        id: 'cookies',
        titulo: 'Cookies e almacenamento local',
        p: [
          'Esta web non usa cookies de analítica nin de publicidade. Para lembrar o contido do carro, usa o almacenamento local do teu navegador, un recurso técnico necesario que se baleira ao completar a compra.',
          'A páxina de pagamento pertence a Stripe, que pode usar as súas propias cookies de seguridade e funcionamento. Se hai ligazóns a plataformas externas, como a dun tráiler, a súa política aplícase unha vez que sales de Lendario.',
          'Algunhas entradas do blog, como as do prototipo e do flipbook, incorporan contido de terceiros (Vimeo e o servizo do flipbook), que pode usar cookies ou outras tecnoloxías propias ao cargarse. Estes servizos non se usan na tenda nin no proceso de compra.',
        ],
      },
      {
        id: 'dereitos',
        titulo: 'Os teus dereitos',
        p: [
          'Podes pedirnos acceder aos teus datos, rectificalos, suprimilos, oporte ao seu tratamento, limitalo ou recibilos noutro formato (portabilidade). Escríbenos ao correo de contacto indicando o teu nome e o número do pedido, e responderémosche no prazo dun mes.',
          'Se consideras que non tratamos os teus datos correctamente, tes dereito a presentar unha reclamación ante a Axencia Española de Protección de Datos (www.aepd.es).',
        ],
        mostrarContacto: true,
      },
      {
        id: 'cambios',
        titulo: 'Cambios nesta política',
        p: [
          'Se cambiamos a forma de tratar os datos, actualizaremos esta páxina e a data da última actualización.',
        ],
      },
    ],
  },
  es: {
    eyebrow: 'Datos personales',
    titulo: 'Política de privacidad',
    intro:
      'Explicamos qué datos tuyos tratamos cuando compras en Lendario, para qué los usamos, con quién los compartimos y qué derechos tienes, conforme al Reglamento (UE) 2016/679 (RGPD) y a la Ley Orgánica 3/2018.',
    actualizado: 'Última actualización',
    contacto: 'Contacto',
    secciones: [
      {
        id: 'responsable',
        titulo: 'Responsable del tratamiento',
        p: [
          'El responsable de tus datos es Lendario, la tienda online de la baraja de la mitología gallega. Estos son nuestros datos de contacto:',
        ],
        mostrarContacto: true,
      },
      {
        id: 'datos',
        titulo: 'Qué datos tratamos',
        p: ['Solo tratamos los datos necesarios para gestionar tu compra:'],
        ul: [
          'Datos del pedido que introduces en la página de pago de Stripe: nombre, correo electrónico, dirección de envío, teléfono, productos e importe.',
          'Datos del pago: Stripe los procesa directamente y Lendario no ve ni guarda el número de tu tarjeta.',
          'Datos técnicos de conexión, como la dirección IP y el tipo de navegador, que registra el servidor de la web por motivos de seguridad y funcionamiento.',
          'Datos del carrito de compra, que se guardan solo en tu dispositivo.',
        ],
        p2: ['No tenemos registro de usuarios, formularios de contacto ni boletín en esta web.'],
      },
      {
        id: 'finalidades',
        titulo: 'Para qué los usamos',
        ul: [
          'Gestionar tu pedido: cobrar, preparar y enviar la compra, y atender devoluciones, garantías y consultas. Base jurídica: ejecución del contrato de compra (art. 6.1.b RGPD).',
          'Cumplir las obligaciones fiscales y contables, como emitir facturas y conservar los registros. Base jurídica: obligación legal (art. 6.1.c RGPD).',
          'Prevenir el fraude y garantizar la seguridad de los pagos y de la web. Base jurídica: interés legítimo (art. 6.1.f RGPD).',
        ],
        p2: [
          'No enviamos comunicaciones comerciales sin tu consentimiento previo, no vendemos tus datos ni tomamos decisiones automatizadas con efectos sobre ti.',
        ],
      },
      {
        id: 'boletin',
        titulo: 'Boletín',
        p: [
          'Si te suscribes al boletín, tratamos tu correo electrónico para enviarte novedades sobre Lendario, como el lanzamiento de la baraja, adelantos de las cartas y contenido del blog. Base jurídica: tu consentimiento (art. 6.1.a RGPD), que puedes retirar en cualquier momento.',
        ],
        ul: [
          'Usamos doble confirmación: solo te añadimos a la lista cuando confirmas tu correo con el enlace del mensaje que te enviamos.',
          'Cada envío incluye un enlace para darte de baja.',
          'Conservamos tu correo mientras sigas suscrito o suscrita; si te das de baja, dejamos de enviarte comunicaciones.',
        ],
      },
      {
        id: 'destinatarios',
        titulo: 'Con quién los compartimos',
        ul: [
          'Stripe, para procesar el pago y detectar fraude. Stripe puede tratar ciertos datos como responsable propio; su política está en stripe.com/es/privacy.',
          'La empresa de transporte, que recibe tu nombre, dirección y teléfono para entregar el pedido.',
          'Netlify, que aloja la web y ejecuta el proceso de pago.',
          'Brevo (Francia), que gestiona la lista del boletín y el envío de los correos, si te suscribes.',
          'La gestoría o asesoría fiscal que nos ayude con la contabilidad, y las administraciones públicas cuando la ley lo exija.',
        ],
        p2: [
          'Algunos de estos proveedores, como Stripe y Netlify, pueden tratar datos fuera del Espacio Económico Europeo. En esos casos se apoyan en las garantías que reconoce la normativa, como las cláusulas contractuales tipo de la UE.',
        ],
      },
      {
        id: 'conservacion',
        titulo: 'Cuánto tiempo los conservamos',
        p: [
          'Conservamos los datos del pedido mientras sea necesario para atender devoluciones, garantías y reclamaciones. Después mantenemos solo los datos fiscales y contables durante el plazo legal, que puede llegar a 6 años, y los bloqueamos hasta su eliminación.',
        ],
      },
      {
        id: 'cookies',
        titulo: 'Cookies y almacenamiento local',
        p: [
          'Esta web no usa cookies de analítica ni de publicidad. Para recordar el contenido del carrito, usa el almacenamiento local de tu navegador, un recurso técnico necesario que se vacía al completar la compra.',
          'La página de pago pertenece a Stripe, que puede usar sus propias cookies de seguridad y funcionamiento. Si hay enlaces a plataformas externas, como el de un tráiler, su política se aplica una vez que sales de Lendario.',
          'Algunas entradas del blog, como las del prototipo y del flipbook, incorporan contenido de terceros (Vimeo y el servicio del flipbook), que puede usar cookies u otras tecnologías propias al cargarse. Estos servicios no se usan en la tienda ni en el proceso de compra.',
        ],
      },
      {
        id: 'derechos',
        titulo: 'Tus derechos',
        p: [
          'Puedes pedirnos acceder a tus datos, rectificarlos, suprimirlos, oponerte a su tratamiento, limitarlo o recibirlos en otro formato (portabilidad). Escríbenos al correo de contacto indicando tu nombre y el número de pedido, y te responderemos en el plazo de un mes.',
          'Si consideras que no tratamos tus datos correctamente, tienes derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (www.aepd.es).',
        ],
        mostrarContacto: true,
      },
      {
        id: 'cambios',
        titulo: 'Cambios en esta política',
        p: [
          'Si cambiamos la forma de tratar los datos, actualizaremos esta página y la fecha de la última actualización.',
        ],
      },
    ],
  },
};
