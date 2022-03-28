import React from 'react';
import PropTypes from 'prop-types';
import { COLORS } from '@lib/constants.js';

const Button = ({
  children,
  onClick = () => {},
  primaryBackground = COLORS.ORANGE_PRIMARY,
  secondaryBackground = COLORS.ORANGE_SECONDARY,
  boxShadow = COLORS.ORANGE_SHADOW,
  disabled = false,
  Component = 'button',
  borderRadius,
  padding = 0,
  margin = 0,
  color,
  fontSize,
  animate = true,
  name,
  ...props
}) => {
  return (
    <Component onClick={onClick} {...props}>
      {name}
      {children}
      <style jsx>
        {`
          button {
            border-radius: ${borderRadius || '5px'};
            outline: none;
            border: none;
            box-shadow: ${boxShadow ? `0 0 20px ${boxShadow}` : 'none'};
            background-color: ${primaryBackground};
            background-image: linear-gradient(62deg, #fbab7e 0%, #f7ce68 100%);
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
              Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
              sans-serif;
            font-size: ${fontSize || `1.1em`};
            color: black;
            transition: border-radius 0.2s, transform 0.2s;
            margin: ${margin};
            padding: ${padding};
            cursor: pointer;
          }

          ${
            animate
              ? `
                button:hover {
                  transform: scale(1.2);
                  border-radius: 10px;
                }
              `
              : ``
          }
        }
        `}
      </style>
    </Component>
  );
};

Button.propTypes = {};

export default Button;
