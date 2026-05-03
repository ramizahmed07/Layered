import React from 'react';
import clsx from 'clsx';
import { cookies } from 'next/headers';
import { Rss, Sun, Moon } from 'react-feather';

import Logo from '@/components/Logo';
import VisuallyHidden from '@/components/VisuallyHidden';
import styles from './Header.module.css';

function Header({ theme, className, ...delegated }) {
  async function toggleTheme() {
    'use server';
    (await cookies()).set('theme', theme === 'light' ? 'dark' : 'light');
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
