import React from 'react';
import PropTypes from 'prop-types';
import NextLink from 'next/link';
import Image from 'next/image';
import { useSession, signOut } from 'next-auth/react';
import { undraggable } from '@lib/reactUtils';

import NavElement from '@components/layout/navbar/nav-element/NavElement';

import styles from './Navbar.module.css';
import logo from '@public/static/images/temp-logo.png';

const Navbar = (props) => {
  const { data: session, status } = useSession();
  const loggedin = status === 'authenticated';

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
      {loggedin ? (
        <>
          <NavElement
            button
            onClick={() => {
              signOut({ callbackUrl: 'http://localhost:3000/login' });
            }}
          >
            Logout
          </NavElement>
        </>
      ) : (
        <>
          <NavElement href="/login">Login</NavElement>
          <NavElement href="/AboutUs">About us</NavElement>
          <NavElement href="/Help">Help</NavElement>
        </>
      )}
    </nav>
  );
};

Navbar.propTypes = {
  login: PropTypes.bool,
};

export default Navbar;
