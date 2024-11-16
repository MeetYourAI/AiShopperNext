import '@/styles/global.css';

import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';
import React from 'react';

import { Providers } from './providers';

export const metadata: Metadata = {
  title: 'Ecommerce Template',
  icons: [
    {
      rel: 'apple-touch-icon',
      url: '/apple-touch-icon.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/favicon.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/favicon.png',
    },
    {
      rel: 'icon',
      url: '/favicon.ico',
    },
  ],
};

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-dm-sans',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`bg-neutral-100 dark:bg-gray ${dmSans.className}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

// Enable edge runtime, but you are required to disable the `migrate` function in `src/libs/DB.ts`
// Unfortunately, this also means it will also disable the automatic migration of the database
// And, you will have to manually migrate it with `drizzle-kit push`
// export const runtime = 'edge';
