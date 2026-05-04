'use client';

import React, { useState } from 'react';
import clsx from 'clsx';
import { Rss, Sun, Moon } from 'react-feather';

import Logo from '@/components/Logo';
import VisuallyHidden from '@/components/VisuallyHidden';
import styles from './Header.module.css';
import {
  COLOR_THEME_COOKIE_NAME,
  LIGHT_TOKENS,
  DARK_TOKENS,
} from '@/constants';
import { setCookie } from '@/app/actions';

function Header({ initialTheme, className, ...delegated }) {
  const [theme, setTheme] = useState(initialTheme);

  async function toggleTheme() {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    const newTokens = newTheme === 'dark' ? DARK_TOKENS : LIGHT_TOKENS;
    const root = document.documentElement;
    root.setAttribute('data-color-theme', newTheme);
    Object.entries(newTokens).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });

    await setCookie(COLOR_THEME_COOKIE_NAME, newTheme);
  }

  return (
    <header className={clsx(styles.wrapper, className)} {...delegated}>
      <Logo />

      <div className={styles.actions}>
        <a target='_blank' href='/rss.xml' className={styles.action}>
          <Rss
            size='1.5rem'
            style={{
              // Optical alignment
              transform: 'translate(2px, -2px)',
            }}
          />
          <VisuallyHidden>View RSS feed</VisuallyHidden>
        </a>

        <form action={toggleTheme}>
          <button className={styles.action}>
            {theme === 'light' ? <Moon size='1.5rem' /> : <Sun size='1.5rem' />}

            <VisuallyHidden>Toggle dark / light mode</VisuallyHidden>
          </button>
        </form>
      </div>
    </header>
  );
}

export default Header;
