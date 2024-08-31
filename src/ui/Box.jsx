import PropTypes from "prop-types";

function Box({ children }) {
  return <div className="center">{children}</div>;
}

Box.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Box;
