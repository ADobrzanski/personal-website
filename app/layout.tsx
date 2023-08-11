import './globals.css';
import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import Header from './components/header';

const outfit = Outfit({ subsets: ['latin-ext'], variable: '--font-outfit' });

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
      <body className={`${outfit.className} font-sans h-full`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
