import React from 'react';
import PropTypes from 'prop-types';
import NextLink from 'next/link';

import styles from './NavElement.module.css';

const NavElement = (props) => {
  const { children, ...NavSettings } = props;
  return (
    <div className={styles.NavElement}>
      <NextLink {...NavSettings}>
        <a>{children}</a>
      </NextLink>
    </div>
  );
};

NavElement.propTypes = {};

export default NavElement;
