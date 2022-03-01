import React from 'react';
import PropTypes from 'prop-types';

import styles from './Layout.module.css';

const DashboardLayout = ({ children }) => {
  return <main className={styles.Layout}>{children}</main>;
};

DashboardLayout.propTypes = {};

export default DashboardLayout;
