import React, { useState } from 'react';
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

const Chat = ({ children, ...props }) => {
  const [chatMessages, setChatMessages] = useState([]);

  return (
    <div>
      <ol>
        <ChatMessage username="bob" color="green">
          sup
        </ChatMessage>
        <ChatMessage username="osama benladen" color="purple">
          sup
        </ChatMessage>
        <ChatMessage username="osama benladen" color="purple">
          u up?
        </ChatMessage>
        <ChatMessage username="bob" color="green">
          what?
        </ChatMessage>
        <ChatMessage username="osama benladen" color="purple">
          did I stutter?
        </ChatMessage>
        <ChatMessage username="osama benladen" color="purple">
          u up?
        </ChatMessage>
        <ChatMessage username="bob" color="green">
          yeah
        </ChatMessage>
        <ChatMessage username="bob" color="green">
          and im down
        </ChatMessage>
      </ol>
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
