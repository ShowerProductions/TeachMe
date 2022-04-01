import React, { useState, useEffect } from 'react';

import { useRouter } from 'next/router';

import io from 'socket.io-client';

import Layout from '@components/Layout';
import VideoCamera from '@components/VideoCamera';
import InputItem from '@components/InputItem';
import Chat from '@components/Chat';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrophone } from '@fortawesome/free-solid-svg-icons';
import { faMicrophoneSlash } from '@fortawesome/free-solid-svg-icons';
import { faVideo } from '@fortawesome/free-solid-svg-icons';
import { faVideoSlash } from '@fortawesome/free-solid-svg-icons';

const OptionButton = ({
  children,
  onClick = () => {},
  initallyToggled = false,
  enabledImage,
  disabledImage,
  unavailable = false,
  width,
  height,
  ...props
}) => {
  const [toggled, setToggled] = useState(initallyToggled);

  useEffect(() => {
    if (unavailable === true) setToggled(false);
  }, [unavailable]);

  return (
    <button
      onClick={() => {
        if (unavailable === false) {
          setToggled(!toggled);
          onClick();
        }
      }}
      {...props}
    >
      <FontAwesomeIcon
        icon={toggled ? enabledImage : disabledImage}
        style={unavailable ? { color: 'grey' } : {}}
      />
      <style jsx>
        {`
          button {
            width: ${width || '30px'};
            height: ${height || '30px'};
            background: transparent;
            border: none;
            border-radius: 5px;
          }

          button:hover {
            ${!unavailable ? 'background: rgba(150, 150, 150, 0.2)' : ''};
          }
        `}
      </style>
    </button>
  );
};

const Session = (props) => {
  const router = useRouter();
  const id = router.query.id || [];

  const [microphoneEnabled, setMicrohponeEnabled] = useState(false);
  const [videoEnabled, setVideoEnabled] = useState(false);

  useEffect(() => socketInitializer(), []);

  const socketInitializer = async () => {
    await fetch('/api/socket');
    const socket = io();

    socket.on('connect', () => {
      console.log('connected');
    });
  };

  useEffect(() => {
    const constraints = {
      video: true,
      audio: true,
    };

    navigator.mediaDevices
      .getUserMedia(constraints)
      .then((stream) => console.log(`Got Media Stream: ${stream}`))
      .catch((error) => console.log(`Error accessing media devices: ${error}`));

    return function cleanup() {};
  }, []);

  return (
    <Layout navbar>
      <main>
        <div className="top-row">
          <Chat />
          <div className="video-camera">
            <VideoCamera />
            <div className="options">
              <OptionButton
                enabledImage={faMicrophone}
                disabledImage={faMicrophoneSlash}
              />
              <OptionButton
                unavailable
                enabledImage={faVideo}
                disabledImage={faVideoSlash}
              />
            </div>
          </div>
        </div>
        <div className="bottom-row">
          <InputItem name="Write a Message" type="text" />
        </div>
      </main>
      <style jsx>{`
        main {
          display: grid;
          grid: 5fr 1fr/ 1fr;
          gap: 5px;
          height: 100%;
          width: 100%;
          padding: 0;
          margin: 0;
          background: white;
        }

        .top-row {
          display: grid;
          grid: 1fr / 5fr 3fr;
        }

        .video-camera {
          display: flex;
          flex-flow: column nowrap;
          justify-content: flex-end;
          align-items: center;
          align-content: center;
          gap: 5px;
          padding: 50px 0;
        }

        .options {
          display: flex;
          flex-flow: row nowrap;
          justify-content: flex-start;
          align-items: center;
          align-content: center;
          width: 100%;
        }

        .bottom-row {
          display: flex;
          flex-flow: column nowrap;
          justify-content: center;
          align-items: center;
          align-content: center;
          padding: 0 10%;
        }
      `}</style>
    </Layout>
  );
};

export default Session;
