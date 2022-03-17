import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle as questionMarkIcon } from '@fortawesome/free-regular-svg-icons';
import { faQuestionCircle as filledQuestionMarkIcon } from '@fortawesome/free-solid-svg-icons';

const Info = ({ children, left, right, top, bottom }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {hovered ? (
        <FontAwesomeIcon
          icon={filledQuestionMarkIcon}
          style={{ color: 'grey' }}
        />
      ) : (
        <FontAwesomeIcon icon={questionMarkIcon} style={{ color: 'grey' }} />
      )}
      <style jsx>
        {`
          div {
            position: relative;
            left: ${left || 'none'};
            right: ${right || 'none'};
            top: ${top || 'none'};
            bottom: ${bottom || 'none'};
          }
        `}
      </style>
    </div>
  );
};

Info.propTypes = {
  left: PropTypes.string,
  right: PropTypes.string,
  top: PropTypes.string,
  bottom: PropTypes.string,
};

export default Info;
