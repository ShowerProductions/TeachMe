import React from 'react';
import PropTypes from 'prop-types';

import { signOut } from 'next-auth/react';

import utilStyles from '@styles/utils.module.css';

const MenuButton = ({ children, ...props }) => {
  return (
    <button {...props}>
      {children}
      <style jsx>{`
        button {
          width: 100%;
          text-align: start;
          margin: 0;
          padding: 8px 0;
          color: white;
          font-size: 0.9em;
          border: none;
          background: none;
          cursor: pointer;
        }

        button:hover {
          background: rgb(200, 200, 200);
        }
      `}</style>
    </button>
  );
};

const Menu = ({
  children,
  top,
  bottom,
  right,
  left,
  textColor,
  background,
}) => {
  return (
    <div className={`${utilStyles.unselectable}`}>
      <p>
        Signed in as <br /> [User]
      </p>
      <MenuButton>Settings</MenuButton>
      <MenuButton onClick={() => signOut('/login')}>Sign Out</MenuButton>
      <style jsx>{`
        div {
          --div-background: ${background || 'rgba(70, 70, 70)'};
          display: flex;
          flex-flow: column nowrap;
          justify-content: flex-start;
          align-items: flex-start;
          position: absolute;
          top: ${top || 'none'};
          bottom: ${bottom || 'none'};
          left: ${left || 'none'};
          right: ${right || 'none'};
          width: 180px;
          padding: 50px 0px;
          border-radius: 10px;
          padding: 5px 15px;
          background: var(--div-background);
          border: white;
        }

        div::after {
          --triangle-size: 10px;
          content: '';
          position: absolute;
          bottom: 100%;
          right: 20px;
          border-left: var(--triangle-size) solid transparent;
          border-right: var(--triangle-size) solid transparent;
          border-bottom: var(--triangle-size) solid var(--div-background);
        }

        p {
          color: white;
          padding: 0;
          margin: 10px 0;
        }
      `}</style>
    </div>
  );
};

Menu.propTypes = {
  top: PropTypes.string,
  bottom: PropTypes.string,
  right: PropTypes.string,
  left: PropTypes.string,
};

export default Menu;
