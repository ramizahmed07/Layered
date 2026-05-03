import React from 'react';
import Link from 'next/link';

import Logo from '@/components/Logo';

import styles from './Footer.module.css';
import DecorativeSwoops from './DecorativeSwoops';

function Footer() {
  return (
    <div className={styles.wrapper}>
      <DecorativeSwoops />
      <div className={styles.content}>
        <div className={styles.logoWrapper}>
          <Logo mobileAlignment='center' />
        </div>
        <nav>
          <h2 className={styles.linkHeading}>Links</h2>
          <ul className={styles.linkList}>
            <li>
              <Link href='/rss'>RSS feed</Link>
            </li>
            <li>
              <Link href='/todo'>Terms of Use</Link>
            </li>
            <li>
              <Link href='/todo'>Privacy Policy</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Footer;
