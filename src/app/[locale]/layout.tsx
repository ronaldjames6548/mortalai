import '../globals.css';
import '../assets/css/tailwind.css';
import '../assets/css/materialdesignicons.min.css';
import { Figtree } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

const figtree = Figtree({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-figtree',
});

export const metadata = {
  title: 'Mortal.Ai - Next Js AI Writer & Copywriting Template',
  description: 'Mortal.Ai - Next Js AI Writer & Copywriting Template',
};

export function generateStaticParams() {
  return ['en', 'es', 'fr'].map((locale) => ({ locale }));
}

export default async function RootLayout({ 
  children, 
  params 
}: { 
  children: React.ReactNode; 
  params: Promise<{ locale: string }> 
}) {
  const { locale } = await params;
  
  // Providing all messages to the client side
  const messages = await getMessages();

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