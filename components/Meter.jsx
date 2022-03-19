import React from 'react';
import PropTypes from 'prop-types';

const Meter = ({
  children,
  currentValue = 1,
  maxValue = 5,
  diameter,
  thickness,
}) => {
  return (
    <div>
      <h1>
        {currentValue}
        <span className="slash">/</span>
        {maxValue}
      </h1>
      <style jsx>{`
        div {
          position: relative;
          width: ${diameter || '100px'};
          height: calc(${diameter || '100px'} / 2);
          background: green;
          border-radius: 150px 150px 0 0;
          z-index: 1;
        }

        div::after {
          --circle-width: calc(${diameter || '100px'} - ${thickness || '40px'});
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: var(--circle-width);
          height: calc(var(--circle-width) / 2);
          border-radius: 150px 150px 0 0;
          background: white;
          z-index: 2;
        }

        h1 {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 3;
        }

        .slash {
          display: inline;
          font-size: 2em;
        }
      `}</style>
    </div>
  );
};

Meter.propTypes = {
  currentValue: PropTypes.number,
  maxValue: PropTypes.number,
  diameter: PropTypes.string,
  thickness: PropTypes.string,
};

export default Meter;
