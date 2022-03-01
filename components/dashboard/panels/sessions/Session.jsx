import React from 'react';
import PropTypes from 'prop-types';

const Session = ({ user, title, description, topic }) => {
  return <div>Session</div>;
};

Session.propTypes = {
  user: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  topic: PropTypes.string,
};

export default Session;
