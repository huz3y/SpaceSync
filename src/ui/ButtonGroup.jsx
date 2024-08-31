import PropTypes from "prop-types";

function ButtonGroup({ children, className }) {
  return <div className={`button-group ${className}`}>{children}</div>;
}

ButtonGroup.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default ButtonGroup;
