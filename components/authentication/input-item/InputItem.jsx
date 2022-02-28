import React from 'react';
import PropTypes from 'prop-types';

import styles from './InputItem.module.css';

const InputItem = (props) => {
  return (
    <div className={styles.InputItem}>
      <h3 className={styles.name}>{props.name}</h3>
      <input className={styles.inputField} type={props.type} />
    </div>
  );
};

InputItem.propTypes = {
  type: PropTypes.string,
};

export default InputItem;
