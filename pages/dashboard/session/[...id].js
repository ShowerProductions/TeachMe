import React from 'react';

import { useRouter } from 'next/router';

import Layout from '@components/Layout';
import VideoCamera from '@components/VideoCamera';
import InputForm from '@components/InputForm';
import InputItem from '@components/InputItem';
import Chat from '@components/Chat';

import { COLORS } from '@lib/constants';

const Session = (props) => {
  const router = useRouter();
  const id = router.query.id || [];
  return (
    <Layout navbar>
      <main>
        <div className="chat-area">
          <Chat />
          <div className="input-area">
            <InputItem name="Text" type="text" />
          </div>
        </div>
        <div className="video-camera">
          <VideoCamera />
        </div>
      </main>
      <style jsx>{`
        main {
          display: grid;
          grid: 1fr / 2fr 1fr;
          gap: 5px;
          height: 100%;
          width: 100%;
          padding: 0;
          margin: 0;
          background: linear-gradient(
            to left,
            ${COLORS.BLUE_PRIMARY},
            ${COLORS.BLUE_SECONDARY}
          );
        }

        .chat-area {
          display: grid;
          grid: 6fr 1fr / 1fr;
          gap: 5px;
        }

        main *,
        .chat-area * {
          height: 100%;
          width: 100%;
        }

        .chat-area * {
          background-color: white;
        }

        .input-area {
          display: flex;
          flex-flow: column nowrap;
          justify-content: center;
          align-items: center;
          align-content: center;
          padding: 0 20px;
        }

        main .video-camera {
          background-color: white;
        }

        .video-camera {
          display: flex;
          justify-content: center;
          align-items: center;
          align-content: center;
          height: 100%;
          width: 100%;
          padding: 10px;
        }
      `}</style>
    </Layout>
  );
};

export default Session;
