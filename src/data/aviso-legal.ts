import type { Lang } from '../i18n/ui';
import type { Politicas } from './politicas';

export const avisoLegal: Record<Lang, Politicas> = {
  gl: {
    eyebrow: 'Información legal',
    titulo: 'Aviso legal',
    intro:
      'Condicións xerais de uso deste sitio web e información sobre o seu titular, conforme á Lei 34/2002, de servizos da sociedade da información e de comercio electrónico (LSSI-CE).',
    actualizado: 'Última actualización',
    contacto: 'Contacto',
    secciones: [
      {
        id: 'titular',
        titulo: 'Titular do sitio web',
        p: [
          'Lendario é a tenda online dunha baralla española inspirada na mitoloxía galega. Estes son os datos do seu titular, conforme ao artigo 10 da LSSI-CE:',
        ],
        mostrarContacto: true,
      },
      {
        id: 'obxecto',
        titulo: 'Obxecto e aceptación',
        p: [
          'Este aviso regula o acceso e o uso do sitio web. Navegar por el atribúete a condición de persoa usuaria e supón que aceptas estas condicións; se non estás de acordo, debes deixar de utilizalo.',
        ],
      },
      {
        id: 'propiedade',
        titulo: 'Propiedade intelectual e industrial',
        p: [
          'Os textos, as ilustracións, o deseño das cartas, o nome e o logotipo de Lendario, así como a estrutura e o código desta web, pertencen ao seu titular ou aos seus licenciantes e están protexidos pola normativa de propiedade intelectual e industrial.',
          'Non se pode reproducir, distribuír, comunicar publicamente nin transformar ningún destes contidos sen autorización previa e por escrito, salvo para uso privado e citas breves que indiquen a fonte.',
          'Os seres e as lendas da mitoloxía galega forman parte da tradición popular; Lendario ofrece a súa propia versión, con textos e ilustracións orixinais.',
        ],
      },
      {
        id: 'uso',
        titulo: 'Uso correcto do sitio',
        p: ['Comprométeste a usar a web de forma lícita e de boa fe. En particular, non podes:'],
        ul: [
          'Realizar actividades que danen, sobrecarguen ou impidan o funcionamento normal da web.',
          'Intentar acceder sen autorización a sistemas, contas ou datos de terceiros.',
          'Utilizar os contidos con fins comerciais sen permiso do titular.',
        ],
      },
      {
        id: 'responsabilidade',
        titulo: 'Responsabilidade',
        p: [
          'Procuramos que a información da web sexa veraz e estea actualizada, pero non podemos garantir a ausencia de erros nin a dispoñibilidade continua do servizo. Non nos responsabilizamos dos danos derivados de interrupcións técnicas alleas ao noso control nin dos contidos de terceiros.',
          'Todo isto enténdese sen prexuízo dos dereitos que a lei recoñece ás persoas consumidoras.',
        ],
      },
      {
        id: 'ligazons',
        titulo: 'Ligazóns a outros sitios',
        p: [
          'A web pode conter ligazóns a servizos de terceiros, como Stripe para o pagamento ou Instagram. Non controlamos o seu contido nin as súas políticas, que se rexen polos seus propios termos.',
          'Podes enlazar a Lendario sempre que non induzas a confusión nin dea a entender unha relación ou aprobación que non existe.',
        ],
      },
      {
        id: 'compras-datos',
        titulo: 'Compras e datos persoais',
        p: [
          'As compras rexense polas Condicións do servizo (páxina «Políticas da tenda»). O tratamento dos teus datos persoais explícase na Política de privacidade.',
        ],
      },
      {
        id: 'lei',
        titulo: 'Lexislación aplicable',
        p: [
          'Este aviso réxese pola lexislación española. Se es persoa consumidora, conservas os dereitos irrenunciables que a lei che recoñece, incluído o de acudir aos tribunais do teu domicilio.',
        ],
      },
    ],
  },
  es: {
    eyebrow: 'Información legal',
    titulo: 'Aviso legal',
    intro:
      'Condiciones generales de uso de este sitio web e información sobre su titular, conforme a la Ley 34/2002, de servicios de la sociedad de la información y de comercio electrónico (LSSI-CE).',
    actualizado: 'Última actualización',
    contacto: 'Contacto',
    secciones: [
      {
        id: 'titular',
        titulo: 'Titular del sitio web',
        p: [
          'Lendario es la tienda online de una baraja española inspirada en la mitología gallega. Estos son los datos de su titular, conforme al artículo 10 de la LSSI-CE:',
        ],
        mostrarContacto: true,
      },
      {
        id: 'objeto',
        titulo: 'Objeto y aceptación',
        p: [
          'Este aviso regula el acceso y el uso del sitio web. Navegar por él te atribuye la condición de persona usuaria y supone que aceptas estas condiciones; si no estás de acuerdo, debes dejar de utilizarlo.',
        ],
      },
      {
        id: 'propiedad',
        titulo: 'Propiedad intelectual e industrial',
        p: [
          'Los textos, las ilustraciones, el diseño de las cartas, el nombre y el logotipo de Lendario, así como la estructura y el código de esta web, pertenecen a su titular o a sus licenciantes y están protegidos por la normativa de propiedad intelectual e industrial.',
          'No se puede reproducir, distribuir, comunicar públicamente ni transformar ninguno de estos contenidos sin autorización previa y por escrito, salvo para uso privado y citas breves que indiquen la fuente.',
          'Los seres y las leyendas de la mitología gallega forman parte de la tradición popular; Lendario ofrece su propia versión, con textos e ilustraciones originales.',
        ],
      },
      {
        id: 'uso',
        titulo: 'Uso correcto del sitio',
        p: ['Te comprometes a usar la web de forma lícita y de buena fe. En particular, no puedes:'],
        ul: [
          'Realizar actividades que dañen, sobrecarguen o impidan el funcionamiento normal de la web.',
          'Intentar acceder sin autorización a sistemas, cuentas o datos de terceros.',
          'Utilizar los contenidos con fines comerciales sin permiso del titular.',
        ],
      },
      {
        id: 'responsabilidad',
        titulo: 'Responsabilidad',
        p: [
          'Procuramos que la información de la web sea veraz y esté actualizada, pero no podemos garantizar la ausencia de errores ni la disponibilidad continua del servicio. No nos responsabilizamos de los daños derivados de interrupciones técnicas ajenas a nuestro control ni de los contenidos de terceros.',
          'Todo ello se entiende sin perjuicio de los derechos que la ley reconoce a las personas consumidoras.',
        ],
      },
      {
        id: 'enlaces',
        titulo: 'Enlaces a otros sitios',
        p: [
          'La web puede contener enlaces a servicios de terceros, como Stripe para el pago o Instagram. No controlamos su contenido ni sus políticas, que se rigen por sus propios términos.',
          'Puedes enlazar a Lendario siempre que no induzcas a confusión ni des a entender una relación o aprobación que no existe.',
        ],
      },
      {
        id: 'compras-datos',
        titulo: 'Compras y datos personales',
        p: [
          'Las compras se rigen por las Condiciones del servicio (página «Políticas de la tienda»). El tratamiento de tus datos personales se explica en la Política de privacidad.',
        ],
      },
      {
        id: 'ley',
        titulo: 'Legislación aplicable',
        p: [
          'Este aviso se rige por la legislación española. Si eres persona consumidora, conservas los derechos irrenunciables que la ley te reconoce, incluido el de acudir a los tribunales de tu domicilio.',
        ],
      },
    ],
  },
};
