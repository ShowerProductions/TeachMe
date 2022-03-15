import React from 'react';
import PropTypes from 'prop-types';

const Panel = ({ children }) => {
  return (
    <div>
      {children}
      <style jsx>{`
        div {
          display: flex;
          flex-flow: column nowrap;
          justify-content: flex-start;
          align-items: center;
          align-content: center;
          background-color: white;
          overflow-y: auto;
        }
      `}</style>
    </div>
  );
};

Panel.propTypes = {};

export default Panel;
