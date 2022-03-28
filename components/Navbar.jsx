import React, { useState } from 'react';
import PropTypes from 'prop-types';
import NextLink from 'next/link';
import Image from 'next/image';
import { useSession, signOut } from 'next-auth/react';

import Profile from '@components/Profile';

import { COLORS } from '@lib/constants';

const NavElement = ({ children, button = false, ...NavSettings }) => {
  return (
    <div className="NavElement">
      {button ? (
        <button {...NavSettings}>{children}</button>
      ) : (
        <NextLink {...NavSettings}>
          <a>{children}</a>
        </NextLink>
      )}
      <style jsx>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Secular+One&display=swap');

          .NavElement {
            font-family: 'Secular One', sans-serif;
            font-size: 1.5em;
            border: none;
          }
        `}
      </style>
    </div>
  );
};

const ProfileButton = ({ chlidren }) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setOpen(!open)}>
        <div className="profile-image">
          <Profile />
        </div>
      </button>
      <style jsx>{`
        button {
          height: 100%;
          display: flex;
          flex-flow: row nowrap;
          justify-content: center;
          align-items: center;
          align-content: center;
          box-sizing: content-box;
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 0;
          margin: 0;
          gap: 5px;
        }

        button:hover .profile-image {
          box-shadow: 0 0 0 2px black;
        }

        .profile-image {
          margin: 0;
          padding: 0;
          height: 40px;
          aspect-ratio: 1;
          border-radius: 100%;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

const Navbar = (props) => {
  const { data: session, status } = useSession();
  const loggedin = status === 'authenticated';

  return (
    <nav>
      {loggedin ? (
        <>
          <ProfileButton />
        </>
      ) : (
        <>
          <NavElement href="/login">Login</NavElement>
          <NavElement href="/AboutUs">About us</NavElement>
          <NavElement href="/Help">Help</NavElement>
        </>
      )}
      <style jsx>
        {`
          nav {
            position: fixed;
            left: 0;
            width: 60px;
            height: 100vh;
            background: linear-gradient(
              to bottom,
              ${COLORS.BLUE_PRIMARY},
              ${COLORS.BLUE_SECONDARY}
            );
            display: flex;
            flex-flow: column nowrap;
            justify-content: flex-start;
            align-items: flex-start;
            align-content: center;
            gap: 30px;
            padding: 40px 10px;
            transition: width 0.2s;
            z-index: 10;
          }

          nav:hover {
            width: 120px;
          }

          .logoLink {
            position: absolute;
            left: 10px;
            height: 5%;
            aspect-ratio: 2;
          }
        `}
      </style>
    </nav>
  );
};

Navbar.propTypes = {
  login: PropTypes.bool,
};

export default Navbar;
