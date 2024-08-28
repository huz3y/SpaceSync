import PropTypes from "prop-types";

function Form({ children, onSubmit = (e) => e.preventDefault(), ...props }) {
  return (
    <form className="form" onSubmit={onSubmit} {...props}>
      {children}
    </form>
  );
}

Form.propTypes = {
  children: PropTypes.node.isRequired,
  onSubmit: PropTypes.func,
};

export default Form;
