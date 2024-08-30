import PropTypes from "prop-types";

function Select({ options, value, onChange, ...props }) {
  return (
    <select
      className={`select ${props.type}`}
      value={value}
      onChange={onChange}
      {...props}
    >
      {options.map((option) => (
        <option value={option.value} key={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

Select.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.oneOf(["white", "default"]),
};

export default Select;
