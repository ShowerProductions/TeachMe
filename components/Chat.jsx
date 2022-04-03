import React, { useState, useEffect } from 'react';
import Pusher from 'pusher-js';
import PropTypes from 'prop-types';

const ChatMessage = ({ children, username, color, ...props }) => {
  return (
    <li>
      <span>{username || 'Anonymous'}:</span> {children}
      <style jsx>{`
        li {
          padding-top: 20px;
        }

        span {
          color: ${color || 'blue'};
          font-weight: bold;
        }
      `}</style>
    </li>
  );
};

ChatMessage.propTypes = {
  username: PropTypes.string,
  color: PropTypes.string,
};

const Chat = ({ children, chatId, ...props }) => {
  const [chatLoading, setChatLoading] = useState(true);
  const [chatMessages, setChatMessages] = useState([]);

  useEffect(() => {
    if (chatId !== undefined) {
      Pusher.logToConsole = true;

      const pusher = new Pusher(process.env.PUSHER_APP_KEY, {
        cluster: process.env.PUSHER_APP_CLUSTER,
        forceTLS: true,
      });

      pusher.connection.bind('connected', () => {
        setChatLoading(false);
      });

      const channel = pusher.subscribe(`chat-${chatId}`);
      channel.bind('message', (data) => {
        // We can't just push to chat messages or else the state re-render won't happen
        setChatMessages((oldMessages) => [...oldMessages, data]);
      });

      return () => {
        pusher.unsubscribe(`chat-${chatId}`);
      };
    }
  }, [chatId]);

  const chatMessageComponents = chatMessages.map(
    ({ username, message }, index) => (
      <ChatMessage username={username} key={index}>
        {message}
      </ChatMessage>
    )
  );

  return (
    <div>
      {chatLoading ? <h1>Loading..</h1> : <ol>{chatMessageComponents}</ol>}
      <style jsx>{`
        div {
          position: relative;
          background: white;
        }

        ol {
          position: absolute;
          bottom: 0;
          list-style: none;
          gap: 10px;
        }
      `}</style>
    </div>
  );
};

Chat.propTypes = {};

export default Chat;
