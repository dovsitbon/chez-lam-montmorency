import type { APIRoute } from 'astro';
import { URL_SITE } from '../data/url.mjs';

export const GET: APIRoute = () =>
  new Response(`User-agent: *\nAllow: /\n\nSitemap: ${new URL('/sitemap-index.xml', URL_SITE).href}\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
