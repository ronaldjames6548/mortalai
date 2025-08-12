'use client';

import { useRouter, usePathname } from 'next/navigation';
import { useLocale } from 'next-intl';
import { i18n } from '../../i18n';

export default function LanguageSwitcher() {
  const router = useRouter();
  const currentLocale = useLocale();
  const pathname = usePathname();

  const handleChange = (e) => {
    const newLocale = e.target.value;
    // Replace current locale in pathname (e.g., /en/about -> /es/about)
    const newPath = pathname.replace(`/${currentLocale}`, `/${newLocale}`);
    router.push(newPath);
  };

  return (
    <select 
      value={currentLocale} 
      onChange={handleChange}
      className="py-1 px-2 text-sm text-slate-900 dark:text-white bg-transparent border border-slate-300 dark:border-slate-700 rounded-md focus:outline-none"
    >
      {i18n.locales.map((loc) => (
        <option key={loc} value={loc} className="text-slate-900 dark:text-white">
          {loc.toUpperCase()}
        </option>
      ))}
    </select>
  );
}