import PropTypes from "prop-types";

function Tag({ type, children }) {
  return <span className={`tag tag--${type}`}>{children}</span>;
}

Tag.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Tag;
