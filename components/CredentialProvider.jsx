import React from 'react';
import PropTypes from 'prop-types';

const CredentialProvider = ({
  children,
  onClick = () => {},
  radius = '50px',
  background,
  hoveredBackground,
  ...props
}) => {
  return (
    <button onClick={onClick} {...props}>
      {children}
      <style jsx>{`
        button {
          position: relative;
          width: ${radius};
          height: ${radius};
          border-radius: 100%;
          background-color: ${background || 'rgb(110, 214, 49)'};
          cursor: pointer;
          overflow: hidden;
          transition: background-color 0.5s;
          border: none;
        }

        button:hover {
          background-color: ${hoveredBackground || 'rgb(174, 62, 230)'};
        }

        button::before {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          /* background: ${hoveredBackground || 'rgb(174, 62, 230)'}; */
          background: transparent;
          z-index: -1;
          transform: translateX(100%);
          transition: transform 0.5s;
        }
      `}</style>
    </button>
  );
};

CredentialProvider.propTypes = {
  background: PropTypes.string,
  hoveredBackground: PropTypes.string,
};

export default CredentialProvider;
