// Netlify Function -> POST /api/newsletter
import { handleNewsletter } from '../../src/server/newsletter';

export default (request: Request) =>
  handleNewsletter(request, {
    BREVO_API_KEY: process.env.BREVO_API_KEY,
    BREVO_LIST_ID: process.env.BREVO_LIST_ID,
    BREVO_DOI_TEMPLATE_ID: process.env.BREVO_DOI_TEMPLATE_ID,
    BREVO_LANG_ATTRIBUTE: process.env.BREVO_LANG_ATTRIBUTE,
    SITE_URL: process.env.SITE_URL,
  });

export const config = { path: '/api/newsletter' };
