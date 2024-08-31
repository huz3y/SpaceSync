import PropTypes from "prop-types";

function FileInput({ className = "", ...props }) {
  return <input type="file" className={`file-input ${className}`} {...props} />;
}

FileInput.propTypes = {
  className: PropTypes.string,
};

export default FileInput;
