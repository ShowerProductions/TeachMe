import React from 'react';
import PropTypes from 'prop-types';
import NextLink from 'next/link';
import Image from 'next/image';
import { useSession, signOut } from 'next-auth/react';
import { undraggable } from '@lib/reactUtils';

import Profile from '@components/Profile';
import ToggleArrow from '@components/ToggleArrow';

import logo from '@public/static/images/temp-logo.png';

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
  return (
    <button>
      <div>
        <Profile />
      </div>
      <ToggleArrow />
      <style jsx>{`
        button {
          display: flex;
          flex-flow: row nowrap;
          justify-content: center;
          align-items: center;
          align-content: center;
          box-sizing: content-box;
          height: 70%;
          aspect-ratio: 1;
          padding: 0;
          margin: 0;
          background: transparent;
          border: none;
          cursor: pointer;
        }

        button:hover div {
          box-shadow: 0 0 0 2px black;
        }

        div {
          height: 10px;
          width: 10px;
          border-radius: 100%;
          overflow: hidden;
        }
      `}</style>
    </button>
  );
};

const Navbar = (props) => {
  const { data: session, status } = useSession();
  const loggedin = status === 'authenticated';

  return (
    <nav>
      <div className="logoLink">
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
          {/* <NavElement
            button
            onClick={() => {
              signOut({ callbackUrl: 'http://localhost:3000/login' });
            }}
          >
            Logout
          </NavElement> */}
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
            position: static;
            width: 100vw;
            height: 60px;
            background-color: rgb(200, 20, 20);
            display: flex;
            justify-content: flex-end;
            align-items: center;
            align-content: center;
            gap: 30px;
            overflow: hidden;
            padding: 0 40px;
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
