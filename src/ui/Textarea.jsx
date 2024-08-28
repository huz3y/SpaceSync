import React from "react";
import PropTypes from "prop-types";

const Textarea = React.forwardRef(
  (
    { id = "", placeholder = "", defaultValue = "", rows = 4, ...props },
    ref
  ) => {
    return (
      <textarea
        id={id}
        ref={ref}
        className="textarea__element"
        placeholder={placeholder}
        defaultValue={defaultValue}
        rows={rows}
        {...props}
      />
    );
  }
);

Textarea.displayName = "Textarea";

Textarea.propTypes = {
  id: PropTypes.string,
  placeholder: PropTypes.string,
  defaultValue: PropTypes.string,
  rows: PropTypes.number,
};

export default Textarea;
