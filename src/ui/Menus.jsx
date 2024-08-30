import PropTypes from "prop-types";

function Menus({ children }) {
  return <div className="menus">{children}</div>;
}

Menus.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Menus;
