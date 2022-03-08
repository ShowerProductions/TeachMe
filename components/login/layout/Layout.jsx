import React from 'react';
import PropTypes from 'prop-types';

import styles from './Layout.module.css';

const Layout = ({ children }) => {
  return <div className={styles.Layout}>{children}</div>;
};

Layout.propTypes = {};

export default Layout;
