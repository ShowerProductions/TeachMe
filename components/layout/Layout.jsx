import Navbar from '@components/layout/navbar/Navbar';

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
