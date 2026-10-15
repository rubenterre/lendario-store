// Netlify Function -> POST /api/checkout
import { handleCheckout } from '../../src/server/checkout';

export default (request: Request) =>
  handleCheckout(request, {
    STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
    SITE_URL: process.env.SITE_URL,
    STRIPE_SHIPPING_COUNTRIES: process.env.STRIPE_SHIPPING_COUNTRIES,
  });

export const config = { path: '/api/checkout' };
