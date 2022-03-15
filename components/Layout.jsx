import React from 'react';
import PropTypes from 'prop-types';

import Navbar from '@components/Navbar';

const Layout = ({ children, navbar = false }) => {
  return (
    <div className="Layout">
      {navbar && <Navbar />}
      {children}
      <style jsx>
        {`
          .Layout {
            width: 100vw;
            height: ${navbar ? 'calc(100vh - 80px)' : '100vh'};
            background: rgb(250, 250, 250);
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
