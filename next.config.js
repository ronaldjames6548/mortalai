const withNextIntl = require('next-intl/plugin')(
  './src/i18n/request.ts'
);

const nextConfig = {
  reactStrictMode: false,
};

module.exports = withNextIntl(nextConfig);