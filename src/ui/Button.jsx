import PropTypes from "prop-types";

function Button({
  children = "Click",
  variation = "primary",
  type = "button",
  onClick = () => {},
  disabled = false,
}) {
  return (
    <button
      type={type}
      className={`button button--${variation}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variation: PropTypes.oneOf(["primary", "secondary", "danger"]),
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

export default Button;
