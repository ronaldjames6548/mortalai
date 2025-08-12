// next.config.js
const withNextIntl = require('next-intl/plugin')();

const nextConfig = {
  reactStrictMode: false,
  i18n: {
    locales: ['en', 'es', 'fr'], // Supported locales
    defaultLocale: 'en', // Default locale
  },
};

module.exports = withNextIntl(nextConfig);