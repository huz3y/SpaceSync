import PropTypes from "prop-types";

function ButtonText({ children, onClick = () => {} }) {
  return (
    <button className="button-text" onClick={onClick}>
      {children}
    </button>
  );
}

ButtonText.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

export default ButtonText;
