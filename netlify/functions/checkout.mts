// Netlify Function -> POST /api/checkout
import { handleCheckout } from '../../src/server/checkout';

export default (request: Request) =>
  handleCheckout(request, {
    STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
    SITE_URL: process.env.SITE_URL,
    STRIPE_SHIPPING_COUNTRIES: process.env.STRIPE_SHIPPING_COUNTRIES,
    STRIPE_INVOICES: process.env.STRIPE_INVOICES,
  });

// Límite de peticiones por IP (Netlify): frena scripts que creen sesiones de Checkout en bucle.
// Las reglas de las funciones no pueden ir en netlify.toml. El plan gratuito admite 2 reglas por proyecto (checkout + boletín).
export const config = {
  path: '/api/checkout',
  rateLimit: { windowLimit: 10, windowSize: 60, aggregateBy: ['ip', 'domain'] },
};
