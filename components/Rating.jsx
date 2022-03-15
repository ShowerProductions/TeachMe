import React from 'react';
import PropTypes from 'prop-types';

import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';

const Star = ({ children, active = false }) => {
  return (
    <div>
      {/* <FontAwesomeIcon icon={solid('coffee')} /> */}
      {/* <Image src="/static/images/star-outline.svg" width={1000} height={1000} /> */}
      <FontAwesomeIcon
        icon={faStar}
        style={{
          height: '100%',
          color: 'black',
          'text-shadow': '2px 2px #20202088',
        }}
      />
      {/* <FontAwesomeIcon icon={solid('user-secret')} /> */}
      <style jsx>{`
        div {
          height: 100%;
          aspect-ratio: 1;
        }
      `}</style>
    </div>
  );
};

Star.propTypes = {
  active: PropTypes.bool,
};

const Rating = ({ children, width, height, score = 0 }) => {
  console.log(score);
  const stars = [];
  for (let starIndex = 1; starIndex <= 5; starIndex++) {
    // Activates the correct number of stars, ie score = 3, 3 stars checked
    if (starIndex <= score) stars.push(<Star active={true} />);
    else stars.push(<Star active={false} />);
  }
  return (
    <div>
      {stars}
      <style jsx>{`
        div {
          display: flex;
          flex-flow: row nowrap;
          justify-content: space-between;
          align-items: stretch;
          align-content: center;
          width: ${width || '10px'};
          height: ${height || '10px'};
        }
      `}</style>
    </div>
  );
};

Rating.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  rating: PropTypes.score,
};

export default Rating;
