import React from 'react';
import PropTypes from 'prop-types';

import styles from './Session.module.css';
import utilStyles from '@styles/utils.module.css';

const Session = ({ username, title, description, topic }) => {
  return (
    <div className={styles.Session}>
      <h1 className={styles.title}>{title}</h1>
      <div className={`${styles.metadata} ${utilStyles.unselectable}`}>
        <h3 className={styles.username}>{username}</h3>
        <h3 className={styles.topic}>{topic}</h3>
      </div>
      <p className={styles.description}>{description}</p>
      <button className={styles.joinButton}>Join</button>
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
