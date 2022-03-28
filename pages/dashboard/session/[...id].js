import React from 'react';

import { useRouter } from 'next/router';

import Layout from '@components/Layout';
import VideoCamera from '@components/VideoCamera';
import InputItem from '@components/InputItem';
import Chat from '@components/Chat';

import { COLORS } from '@lib/constants';

const Session = (props) => {
  const router = useRouter();
  const id = router.query.id || [];
  return (
    <Layout navbar>
      <main>
        <div className="top-row">
          <Chat />
          <div className="video-camera">
            <VideoCamera />
          </div>
        </div>
        <div className="bottom-row">
          <InputItem name="Write a Message" type="text" />
        </div>
        {/* <div className="chat-area">
          <Chat />
          <div className="input-area">
            <InputItem name="Text" type="text" />
          </div>
        </div>
        <div className="video-camera">
          <VideoCamera />
        </div> */}
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

        /*
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

        
        */
        .top-row {
          display: grid;
          grid: 1fr / 5fr 3fr;
        }

        .video-camera {
          /*display: flex;
          flex-flow: column nowrap;
          justify-content: center;
          align-items: center;
          align-content: center;
          height: 100%;
          width: 100%;
          padding: 10px;*/
          position: absolute;
          right: 20px;
          top: 50%;
          transform: translateY(-50%);
          width: 40%;
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
