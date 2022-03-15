import React from 'react';
import PropTypes from 'prop-types';

import utilStyles from '@styles/utils.module.css';

const Session = ({ username, title, description, topic }) => {
  return (
    <div className="session">
      <h1 className="title">{title}</h1>
      <div className={`metadata ${utilStyles.unselectable}`}>
        <h3 className="username">{username}</h3>
        <h3 className="topic">{topic}</h3>
      </div>
      <p className="description">{description}</p>
      <button className="join-button">Join</button>
      <style jsx>
        {`
          .session {
            position: relative;
            display: flex;
            flex-flow: column nowrap;
            justify-content: flex-start;
            border: 3px solid black;
            border-left: none;
            border-right: none;
            border-top: 0;
            background-color: rgb(200, 200, 200);
            padding: 20px;
            width: 100%;
            height: 200px;
          }

          .metadata {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            align-content: center;
            gap: 5px;
          }

          .title {
            margin: 0;
            font-size: 1.5em;
          }

          .username {
            margin: 0;
            font-size: 1em;
            font-family: 'Quicksand', sans-serif;
          }

          .topic {
            margin: 0;
            border: 2px solid black;
            border-radius: 10px;
            padding: 4px;
            font-size: 0.8em;
            background-color: aqua;
          }

          .description {
            margin-left: 0;
            margin-bottom: 0;
            margin-top: 10px;
            margin-right: 60px;
          }

          .join-button {
            position: absolute;
            right: 20px;
            bottom: 20px;
            background-color: lime;
            border: 3px solid black;
            border-radius: 10px;
            width: 60px;
            height: 35px;
            transition: transform 0.2s, background-color 0.2s;
            text-align: center;
            font-size: 1em;
          }

          .join-button:hover {
            transform: scale(1.05);
          }

          .join-button:active {
            background-color: limegreen;
          }
        `}
      </style>
    </div>
  );
};

Session.propTypes = {
  username: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  topic: PropTypes.string,
};

export default Session;
