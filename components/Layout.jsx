import React from 'react';
import PropTypes from 'prop-types';

import Navbar from '@components/Navbar';

const Layout = ({ children, navbar = false }) => {
  return (
    <div>
      {navbar && <Navbar />}
      {children}
      <style jsx>
        {`
          div {
            width: ${navbar ? 'calc(100vw - 60px)' : '100vw'};
            margin-left: ${navbar ? '30px' : '0'};
            height: 100vh;
            padding-left: ${navbar ? '30px' : 'none'};
            background: rgb(250, 250, 250);
            overflow: hidden;
            background-image: url('/static/images/Background.jpg');
          }
        `}
      </style>
    </div>
  );
};

Layout.propTypes = {
  navbar: PropTypes.bool,
};

export default Layout;
