import React from 'react';
import PropTypes from 'prop-types';
import NextLink from 'next/link';
import Image from 'next/image';
import { undraggable } from '@lib/reactUtils';

import styles from './Navbar.module.css';

import logo from '@public/static/images/temp-logo.png';

const Navbar = (props) => {
  return (
    <nav className={styles.Navbar}>
      <NextLink href="/">
        <a className={styles.logoLink}>
          <Image
            alt="logo"
            src={logo}
            layout="intrinsic"
            width={1200}
            height={630}
            onDragStart={undraggable}
          />
        </a>
      </NextLink>
    </nav>
  );
};

Navbar.propTypes = {};

export default Navbar;
