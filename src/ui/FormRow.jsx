import PropTypes from "prop-types";
import React from "react";

function FormRow({ label, id, error, children, className }) {
  const inputId = id || children.props.id;

  return (
    <div className={`form__row ${className}`}>
      {label && (
        <label className={`form__label`} htmlFor={inputId}>
          {label}
        </label>
      )}
      {React.cloneElement(children, { id: inputId })}
      {error && <span className="form__error">{error.message}</span>}
    </div>
  );
}

FormRow.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  className: PropTypes.string,
  error: PropTypes.shape({
    message: PropTypes.string,
  }),
  children: PropTypes.node.isRequired,
};

export default FormRow;
