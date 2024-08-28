import PropTypes from "prop-types";

function Heading({ children }) {
  return <div className="row--horizontal">{children}</div>;
}

Heading.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Heading;
