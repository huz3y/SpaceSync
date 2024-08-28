import React from "react";
import PropTypes from "prop-types";

const Input = React.forwardRef(
  (
    { type = "text", id = "", placeholder = "", defaultValue = "", ...props },
    ref
  ) => {
    return (
      <input
        type={type}
        id={id}
        ref={ref}
        className="input__element"
        placeholder={placeholder}
        defaultValue={defaultValue}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

Input.propTypes = {
  type: PropTypes.string,
  id: PropTypes.string,
  placeholder: PropTypes.string,
  defaultValue: PropTypes.string,
};

export default Input;
