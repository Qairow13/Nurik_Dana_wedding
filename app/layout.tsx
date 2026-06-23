import type { Metadata } from 'next';
import { Playfair_Display, Montserrat } from 'next/font/google';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-playfair',
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ['latin', 'cyrillic'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-montserrat',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Нұрканат & Дана — Той салтанаты',
  description: 'Құрметті ағайын-туыс, дос-жаран! Нұрканат пен Дананың той салтанатына шақырамыз.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="kk">
      <body className={`${playfair.variable} ${montserrat.variable} font-body bg-cream-50 text-gold-900 antialiased`}>
        {children}
      </body>
    </html>
  );
}
