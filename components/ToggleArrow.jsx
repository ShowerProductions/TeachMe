import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretSquareDown } from '@fortawesome/free-regular-svg-icons';

const ToggleArrow = ({ children, open, ...props }) => {
  return (
    <div>
      <FontAwesomeIcon icon={faCaretSquareDown} width={50} height={50} />
      <style jsx>{`
        div {
        }
      `}</style>
    </div>
  );
};

ToggleArrow.propTypes = { open: PropTypes.bool };

export default ToggleArrow;
