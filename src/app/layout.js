import './globals.css'
import './assets/css/tailwind.css'
import "./assets/css/materialdesignicons.min.css"
import { Figtree } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { i18n } from '../i18n';

const figtree = Figtree({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-figtree',
})

export const metadata = {
  title: 'Mortal.Ai - Next Js AI Writer & Copywriting Template',
  description: 'Mortal.Ai - Next Js AI Writer & Copywriting Template',
}

export function generateStaticParams() {
  return i18n.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({ children, params: { locale } }) {
  let messages;
  try {
    messages = (await import(`../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale} className="dark scroll-smooth" dir="ltr">
      <body className={`${figtree.variable} font-figtree text-base text-slate-900 dark:text-white dark:bg-slate-900`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}