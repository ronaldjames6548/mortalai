import './globals.css';
import './assets/css/materialdesignicons.min.css';

import { Figtree } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';

const figtree = Figtree({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-figtree',
});

export const metadata = {
  title: 'Mortal.Ai - Next Js AI Writer & Copywriting Template',
  description: 'Mortal.Ai - Next Js AI Writer & Copywriting Template',
};

export async function generateStaticParams() {
  return ['en', 'es', 'fr'].map((locale) => ({ locale }));
}

export default async function RootLayout({ children, params }: { children: React.ReactNode; params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    messages = (await import(`../../messages/en.json`)).default;
  }

  return (
    <html lang={locale} className="dark scroll-smooth" dir="ltr">
      <body className={`${figtree.variable} font-figtree text-base text-slate-900 dark:text-white dark:bg-slate-900`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}