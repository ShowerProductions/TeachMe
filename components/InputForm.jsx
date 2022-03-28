import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';

import Button from '@components/Button';

const InputForm = ({ children, name, ...props }) => {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} {...props}>
      {children(register)}
      <Button
        onClick={(e) => e.target.closest('form').submit()}
        padding="10px 15px"
        className="submitButton"
        type="submit"
        name={name || 'Login'}
      />
      <style jsx>
        {`
          form {
            height: fit-content;
            width: 60%;
            padding: 5px 20px;
            display: flex;
            flex-flow: column nowrap;
            justify-content: center;
            align-content: center;
            align-items: flex-start;
            gap: 20px;
            border-radius: 10px;
            background-color: transparent;
          }

          .name {
            font-size: 2em;
            align-self: flex-start;
          }
        `}
      </style>
    </form>
  );
};

InputForm.propTypes = {
  name: PropTypes.string,
};

export default InputForm;
