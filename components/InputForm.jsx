import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';

const InputForm = ({ children, name }) => {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1 className="name">{name}</h1>
      {children(register)}
      <input className="submitButton" type="submit" />
      <style jsx>
        {`
          form {
            position: relative;
            top: 50%;
            left: 50%;
            height: fit-content;
            transform: translate(-50%, -50%);
            width: 60%;
            padding: 5px 20px;
            display: flex;
            flex-flow: column nowrap;
            justify-content: center;
            align-content: center;
            align-items: center;
            gap: 20px;
            border-radius: 10px;
            background-color: transparent;
          }

          .name {
            font-size: 2em;
            align-self: flex-start;
          }

          .submitButton {
            width: 100px;
            height: 30px;
            border-radius: 15px;
            background-color: rgb(38, 255, 248);
            border: none;
            outline: none;
            box-shadow: 0 0 5px rgb(30, 257, 240);
          }

          .submitButton:hover {
            background-color: aqua;
            box-shadow: 0 0 5px aqua;
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