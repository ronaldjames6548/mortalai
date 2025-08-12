// src/middleware.ts
import createMiddleware from 'next-intl/middleware';
import { i18n } from './i18n';

export default createMiddleware({
  locales: i18n.locales,
  defaultLocale: i18n.defaultLocale,
  localePrefix: 'always', // Prefix URLs with locale (e.g., /en, /es). Change to 'as-needed' if preferred.
});

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)'], // Apply to all routes except API, Next.js internals, and static files
};