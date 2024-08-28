import PropTypes from "prop-types";

function Heading({ children }) {
  return (
    <div className="row--horizontal margin__bottom--medium margin__top--medium">
      {children}
    </div>
  );
}

Heading.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Heading;
