import React from 'react';
import PropTypes from 'prop-types';

const InputItem = ({
  register = (...args) => {},
  name,
  type,
  error,
  required = false,
  ...props
}) => {
  return (
    <div className="InputItem">
      <input
        className="inputField"
        type={type}
        name={name.toLowerCase()}
        {...register(name, { required: required })}
        placeholder={`${name}...`}
        {...props}
      />
      <p className="errorStatus">{error}</p>
      <style jsx>
        {`
          .InputItem {
            padding: 0px 0px;
            width: 100%;
          }

          .name {
            margin: 0 0 5px 0;
          }

          .inputField {
            width: 100%;
            height: 50px;
            padding: 10px 20px;
            border: none;
            background: linear-gradient(
              to left,
              rgb(0, 100, 200, 0.1),
              rgb(0, 100, 200, 0.12)
            );
            border-radius: 25px;
            font-size: 1.2em;
            outline: none;
          }

          .errorStatus {
            font-size: 1em;
            color: red;
            margin-top: 11px;
          }
        `}
      </style>
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
