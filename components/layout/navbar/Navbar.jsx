import React from 'react';
import PropTypes from 'prop-types';
import NextLink from 'next/link';
import Image from 'next/image';
import { undraggable } from '@lib/reactUtils';

import NavElement from '@components/layout/navbar/nav-element/NavElement';

import styles from './Navbar.module.css';
import logo from '@public/static/images/temp-logo.png';

const Navbar = (props) => {
  return (
    <nav className={styles.Navbar}>
      <div className={styles.logoLink}>
        <NextLink href="/">
          <a>
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
      </div>
      <NavElement href="/login">Login</NavElement>
      <NavElement href="/AboutUs">About us</NavElement>
      <NavElement href="/Help">Help</NavElement>
    </nav>
  );
};

Navbar.propTypes = {};

export default Navbar;
