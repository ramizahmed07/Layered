import clsx from 'clsx';

import styles from './postSlug.module.css';
import loadingStyles from './loading.module.css';

export default function Loading() {
  return (
    <div className={clsx(styles.wrapper, loadingStyles.wrapper)}>
      <div className={styles.page}>
        <h3 className={loadingStyles.heading}>Demystifying the JavaScript</h3>
        <p>Published on September 6th, 2023</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>

        <p>
          Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam
          varius, turpis molestie dictum semper, eros quam iaculis lorem, ac
          feugiat diam enim sit amet erat. Cras dapibus. Vivamus elementum
          semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula,
          porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante,
          dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla
          ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam
          ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam
          eget dui.
        </p>
      </div>
    </div>
  );
}
