// src/app/components/LanguageSwitcher.js
'use client';

import { useRouter, usePathname } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';

export default function LanguageSwitcher() {
  const router = useRouter();
  const currentLocale = useLocale();
  const pathname = usePathname();
  const t = useTranslations('navbar');

  const locales = [
    { code: 'en', name: t('language.en') || 'English' },
    { code: 'es', name: t('language.es') || 'Español' },
    { code: 'fr', name: t('language.fr') || 'Français' },
  ];

  const handleChange = (e) => {
    const newLocale = e.target.value;
    const newPath = pathname.replace(`/${currentLocale}`, `/${newLocale}`);
    router.push(newPath);
  };

  return (
    <select
      value={currentLocale}
      onChange={handleChange}
      className="py-1 px-2 text-sm text-slate-900 dark:text-white bg-transparent border border-slate-300 dark:border-slate-700 rounded-md focus:outline-none"
    >
      {locales.map((loc) => (
        <option
          key={loc.code}
          value={loc.code}
          className="text-slate-900 dark:text-white"
        >
          {loc.name}
        </option>
      ))}
    </select>
  );
}