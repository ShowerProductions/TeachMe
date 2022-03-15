import React from 'react';
import PropTypes from 'prop-types';

const Panel = ({ children }) => {
  return (
    <div>
      {children}
      <style jsx>{`
        div {
          background-color: #fff;
          overflow-y: auto;
        }
      `}</style>
    </div>
  );
};

Panel.propTypes = {};

export default Panel;
