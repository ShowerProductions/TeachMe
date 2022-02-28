import React from 'react';
import PropTypes from 'prop-types';

import styles from './InputForm.module.css';

const InputForm = (props) => {
  const reigsterData = (event) => {
    event.preventDefault();
  };

  return (
    <form className={styles.InputForm} onSubmit={reigsterData}>
      <h1 className={styles.name}>{props.name}</h1>
      {props.children}
      <button className={styles.submitButton}></button>
    </form>
  );
};

InputForm.propTypes = {
  name: PropTypes.string,
};

export default InputForm;
