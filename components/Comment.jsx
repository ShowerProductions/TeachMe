import React from 'react';
import PropTypes from 'prop-types';

import Profile from '@components/Profile';

const Comment = ({
  children,
  username,
  width,
  height,
  borderRadius,
  borderThickness,
}) => {
  return (
    <div className="comment-container">
      <Profile width="50px" height="50px" borderRadius="100%"></Profile>
      <div className="main-content">
        <h2>{username}</h2>
        <p>{children}</p>
      </div>
      <style jsx>{`
        .comment-container {
          display: flex;
          flex-flow: row nowrap;
          justify-content: flex-start;
          width: ${width || '100%'};
          height: ${height || '130px'};
          border: ${borderThickness || '3px'} solid black;
          border-radius: ${borderRadius || '20px'};
          padding: 10px;
          overflow: hidden;
          background: rgb(200, 200, 200);
        }

        .main-content {
          display: flex;
          flex-flow: column;
          gap: 10px;
          width: 100%;
          padding: 5px;
        }

        h2 {
          font-size: 1em;
          margin: 0;
          padding: 0;
        }

        p {
          padding: 0;
          padding-right: 50px;
          margin: 0;
          width: 100%;
          overflow-wrap: break-word;
          word-wrap: break-word;
          hyphens: auto;
        }
      `}</style>
    </div>
  );
};

Comment.propTypes = {};

export default Comment;
