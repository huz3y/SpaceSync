import PropTypes from "prop-types";
import React from "react";

function FormRow({ label, id, error, children, className }) {
  const inputId = id || children.props.id;

  const errorMessage = typeof error === "string" ? error : error?.message || "";

  return (
    <div className={`form__row ${className}`}>
      {label && (
        <label className="form__label" htmlFor={inputId}>
          {label}
        </label>
      )}
      {React.cloneElement(children, { id: inputId })}
      {errorMessage && <span className="form__error">{errorMessage}</span>}
    </div>
  );
}

FormRow.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  className: PropTypes.string,
  error: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      message: PropTypes.string,
    }),
  ]),
  children: PropTypes.node.isRequired,
};

export default FormRow;
