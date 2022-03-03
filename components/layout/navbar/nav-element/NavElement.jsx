import React from 'react';
import PropTypes from 'prop-types';
import NextLink from 'next/link';

import styles from './NavElement.module.css';

const NavElement = ({ children, button = false, ...NavSettings }) => {
  return (
    <div className={styles.NavElement}>
      {button ? (
        <button {...NavSettings}>{children}</button>
      ) : (
        <NextLink {...NavSettings}>
          <a>{children}</a>
        </NextLink>
      )}
    </div>
  );
};

NavElement.propTypes = {
  button: PropTypes.bool,
};

export default NavElement;
