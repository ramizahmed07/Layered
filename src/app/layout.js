import React from 'react';
import clsx from 'clsx';
import localFont from 'next/font/local';
import { Spline_Sans_Mono, Montserrat } from 'next/font/google';
import { MotionConfig } from 'motion/react';
import { cookies } from 'next/headers';

import {
  LIGHT_TOKENS,
  DARK_TOKENS,
  siteConfig,
  COLOR_THEME_COOKIE_NAME,
} from '@/constants';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './styles.css';

const wotfard = localFont({
  src: '../../public/wotfard.woff2',
  variable: '--font-family',
  display: 'fallback',
  preload: true,
  weight: '400',
});

const headingFont = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  weight: 'variable',
  variable: '--font-family-heading',
});
const monoFont = Spline_Sans_Mono({
  subsets: ['latin'],
  display: 'fallback',
  weight: 'variable',
  variable: '--font-family-mono',
});

export const metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
};

async function RootLayout({ children }) {
  const theme =
    (await cookies()).get(COLOR_THEME_COOKIE_NAME)?.value ?? 'light';
  return (
    <MotionConfig reducedMotion='user'>
      <html
        lang='en'
        className={clsx(
          headingFont.variable,
          monoFont.variable,
          wotfard.variable,
        )}
        data-color-theme={theme}
        style={theme === 'light' ? LIGHT_TOKENS : DARK_TOKENS}
      >
        <body>
          <Header theme={theme} />
          <main>{children}</main>
          <Footer />
        </body>
      </html>
    </MotionConfig>
  );
}

export default RootLayout;
