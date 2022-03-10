import React from 'react';
import PropTypes from 'prop-types';

import styles from './InputItem.module.css';

const InputItem = ({ register, name, type, error, required = false }) => {
  return (
    <div className={styles.InputItem}>
      <input
        className={styles.inputField}
        type={type}
        name={name.toLowerCase()}
        {...register(name, { required: required })}
        placeholder={`${name}...`}
      />
      <p className={styles.errorStatus}>{error}</p>
    </div>
  );
};

InputItem.propTypes = {
  register: PropTypes.func,
  name: PropTypes.string,
  type: PropTypes.string,
  required: PropTypes.bool,
};

export default InputItem;
