import React from 'react';
import PropTypes from 'prop-types';

const VideoCamera = ({ children, width, ...props }) => {
  return (
    <div>
      <style jsx>{`
        div {
          background: black;
          width: ${width || '100%'};
          aspect-ratio: calc(4 / 3);
        }
      `}</style>
    </div>
  );
};

VideoCamera.propTypes = {};

export default VideoCamera;
