import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';

import styles from './InputForm.module.css';

const InputForm = (props) => {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <form className={styles.InputForm} onSubmit={handleSubmit(onSubmit)}>
      <h1 className={styles.name}>{props.name}</h1>
      {props.children(register)}
      <button className={styles.submitButton}></button>
    </form>
  );
};

InputForm.propTypes = {
  name: PropTypes.string,
};

export default InputForm;
