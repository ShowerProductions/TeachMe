import React from 'react';
import PropTypes from 'prop-types';

const Seperator = ({ children, length, width, height, background }) => {
  return (
    <div className="Seperator">
      <div className="name">{children}</div>
      <style jsx>{`
        .Seperator {
          display: flex;
          justify-content: center;
          align-items: center;
          align-content: center;
          width: ${length || '100%'};
          height: 4px;
          border-radius: 5px;
          background: ${background || 'rgba(100, 100 ,100, 0.6)'};
          text-align: center;
          overflow: visible;
        }

        .name {
          display: flex;
          justify-content: center;
          align-items: center;
          align-content: center;
          width: ${width || '20px'};
          height: ${height || '20px'};
          background: white;
          border-radius: 2px;
          font-size: 100%;
          color: ${background || 'rgba(100, 100, 100, .7)'};
        }
      `}</style>
    </div>
  );
};

Seperator.propTypes = {
  length: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  background: PropTypes.string,
};

export default Seperator;
