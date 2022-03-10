import React from 'react';
import PropTypes from 'prop-types';

const Layout = ({ children }) => {
  return (
    <div className="Layout">
      {children}
      <style jsx>
        {`
          .Layout {
            width: 100vw;
            height: 100vh;
            background: rgb(250, 250, 250);
          }
        `}
      </style>
    </div>
  );
};

Layout.propTypes = {
  id: PropTypes.string,
};

export default Layout;
