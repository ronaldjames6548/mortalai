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
    const newPath = pathname.replace(`/${currentLocale}`, `/${newLocale}`);
    router.push(newPath);
  };

  return (
    <select 
      value={currentLocale} 
      onChange={handleChange}
      className="py-[6px] px-4 inline-block items-center justify-center tracking-wider align-middle duration-500 text-sm text-center rounded bg-amber-400 hover:bg-amber-500 border border-amber-400 hover:border-amber-500 text-white font-semibold"
    >
      {i18n.locales.map((loc) => (
        <option key={loc} value={loc} className="text-slate-900 dark:text-white">
          {loc.toUpperCase()}
        </option>
      ))}
    </select>
  );
}