import React from 'react';

import styles from './not-found.module.css';

export const metadata = {
  title: `404 Not found`,
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
