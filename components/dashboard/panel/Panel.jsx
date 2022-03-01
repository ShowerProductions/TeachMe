import React from 'react';
import PropTypes from 'prop-types';

import styles from './Panel.module.css';

const Panel = ({ children }) => {
  return <div className={styles.Panel}>{children}</div>;
};

Panel.propTypes = {};

export default Panel;
