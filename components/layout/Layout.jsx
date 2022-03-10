import Navbar from '@components/Navbar';

import styles from './Layout.module.css';

const Layout = ({ children }) => {
  return (
    <div className={styles.Layout}>
      <Navbar />

      {children}
    </div>
  );
};

export default Layout;
