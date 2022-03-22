import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Chat = (props) => {
  const [chatMessages, setChatMessages] = useState([]);

  return (
    <div>
      <style jsx>{`
        div {
          background: white;
        }
      `}</style>
    </div>
  );
};

Chat.propTypes = {};

export default Chat;
