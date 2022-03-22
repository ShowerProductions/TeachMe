import React from 'react';

import { useRouter } from 'next/router';

import Layout from '@components/Layout';
import VideoCamera from '@components/VideoCamera';
import Chat from '@components/Chat';

const Session = (props) => {
  const router = useRouter();
  const id = router.query.id || [];
  return (
    <Layout navbar>
      <main>
        <div className="chat-area">
          <Chat />
          <div className="input-area"></div>
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
          background: green;
        }

        .chat-area {
          display: grid;
          grid: 5fr 1fr / 1fr;
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
