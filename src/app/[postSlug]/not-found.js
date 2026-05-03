import React from 'react';

import styles from './not-found.module.css';
import { siteConfig } from '../config';

export const metadata = {
  title: `404 Not found • ${siteConfig.name}`,
};

function NotFound() {
  return (
    <div className={styles.wrapper}>
      <h1>Not Found</h1>
      <p>
        This page doesn&apos;t exist (yet?) I recently rewrote the site so maybe
        something broke.
      </p>
    </div>
  );
}

export default NotFound;
