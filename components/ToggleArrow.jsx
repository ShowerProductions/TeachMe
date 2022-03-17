import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

const ToggleArrow = ({ children, open = false, ...props }) => {
  return (
    <div className={`${open ? 'active' : ''}`}>
      <FontAwesomeIcon icon={faCaretDown} />
      <style jsx>{`
        div {
          transition: transform 0.5s;
        }
        .active {
          transform: rotate(-180deg);
        }
      `}</style>
    </div>
  );
};

ToggleArrow.propTypes = { open: PropTypes.bool };

export default ToggleArrow;
