import React from "react";
import PropTypes from "prop-types";

const Input = React.forwardRef(
  ({ type = "text", id = "", placeholder = "", ...props }, ref) => {
    return (
      <input
        type={type}
        id={id}
        ref={ref}
        className="input__element"
        placeholder={placeholder}
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
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Input;
