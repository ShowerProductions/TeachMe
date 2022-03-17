import React from 'react';
import PropTypes from 'prop-types';

const MenuButton = ({ children }) => {
  return (
    <button>
      {children}
      <style jsx>{`
        button {
          width: 100%;
          text-align: start;
          margin: 0;
          padding: 5px 4px;
          border: none;
          background: none;
          cursor: pointer;
        }

        button:hover {
          background: rgba(150, 150, 150, 0.9);
        }
      `}</style>
    </button>
  );
};

const Menu = ({ children, background }) => {
  return (
    <div>
      <MenuButton>Settings</MenuButton>
      <MenuButton>Sign Out</MenuButton>
      <style jsx>{`
        div {
          --div-background: rgba(50, 50, 50, 0.9);
          display: flex;
          flex-flow: column nowrap;
          justify-content: flex-start;
          align-items: flex-start;
          position: absolute;
          top: 55px;
          width: 100px;
          padding: 10px 0px;
          border-radius: 10px;
          background: var(--div-background);
          border: white;
        }

        div * {
          color: rgb(200, 200, 200);
          width: 100%;
          height: 20px;
        }

        div *:hover {
          background: rgba(200, 200, 200, 0.9);
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
      `}</style>
    </div>
  );
};

Menu.propTypes = {};

export default Menu;
