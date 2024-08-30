import PropTypes from "prop-types";

function TableOperations({ children }) {
  return <div className="table-operations">{children}</div>;
}

TableOperations.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TableOperations;
