// src/i18n.ts
const i18n = {
  defaultLocale: 'en',
  locales: ['en', 'es', 'fr'],
  loadLocaleFrom: async (locale: string, namespace: string) =>
    import(`./messages/${locale}.json`).then((m) => m.default),
};

export default i18n;