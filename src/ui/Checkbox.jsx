import PropTypes from "prop-types";
import "./Checkbox.scss";

function Checkbox({ checked, onChange, disabled = false, id, children }) {
  return (
    <div className="checkbox">
      <input
        type="checkbox"
        id={id}
        className="checkbox__input"
        checked={checked}
        onChange={onChange}
        disabled={disabled}
      />
      <label className="checkbox__label" htmlFor={!disabled ? id : ""}>
        {children}
      </label>
    </div>
  );
}

Checkbox.propTypes = {
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  id: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
export default Checkbox;
