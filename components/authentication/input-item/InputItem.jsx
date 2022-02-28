import React from 'react';
import PropTypes from 'prop-types';

import styles from './InputItem.module.css';

const InputItem = ({ register, name, type }) => {
  return (
    <div className={styles.InputItem}>
      <h3 className={styles.name}>{name}</h3>
      <input
        className={styles.inputField}
        type={type}
        {...register(name, { required: true })}
      />
    </div>
  );
};

InputItem.propTypes = {
  register: PropTypes.func,
  name: PropTypes.string,
  type: PropTypes.string,
};

export default InputItem;
