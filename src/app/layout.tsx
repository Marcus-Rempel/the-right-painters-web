import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { Playfair_Display } from 'next/font/google';

import { serviceAreaFacts } from '@/data/service-area';

import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'The Right Painters | Premium Painting Services in Chattanooga & TAG Corner',
  description:
    `Professional interior and exterior painting for homes and businesses across the ${serviceAreaFacts.regionLabel}. Serving ${serviceAreaFacts.hubCity} and surrounding communities within ${serviceAreaFacts.radiusMiles} miles. Free estimates.`,
  keywords: [
    'painting company Chattanooga',
    'house painters TAG Corner',
    'interior painting Tennessee',
    'exterior painting Chattanooga',
    'cabinet painting',
    'commercial painting',
    'residential painting',
  ],
  openGraph: {
    title: 'The Right Painters | Premium Painting in Chattanooga & TAG Corner',
    description:
      'Professional painting services with premium craftsmanship. Serving the TAG Corner tri-state area around Chattanooga, TN.',
    type: 'website',
    locale: 'en_US',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
