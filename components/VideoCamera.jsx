import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

const VideoCamera = ({
  children,
  videoStream,
  muted = false,
  width,
  ...props
}) => {
  const videoElement = useRef(null);

  useEffect(() => {
    const video = videoElement.current;
    video.srcObject = videoStream;
  }, [videoStream]);

  return (
    <video ref={videoElement} muted={muted} autoPlay playsinline>
      <style jsx>{`
        video {
          background: black;
          width: ${width || '100%'};
          aspect-ratio: calc(4 / 3);
          pointer-events: none;
        }
      `}</style>
    </video>
  );
};

VideoCamera.propTypes = {
  videoStream: PropTypes.object,
  muted: PropTypes.bool,
  width: PropTypes.string,
};

export default VideoCamera;
