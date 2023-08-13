import './globals.css';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import Header from './components/header';

const montserrat = Montserrat({
  subsets: ['latin-ext'],
  variable: '--font-montserrat',
});

export const metadata: Metadata = {
  title: 'Adrian Dobrzański',
  description:
    'Solving webdev one line at a time. Tutorials, articles, and more.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className='h-full'>
      <body className={`${montserrat.className} h-full font-sans`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
