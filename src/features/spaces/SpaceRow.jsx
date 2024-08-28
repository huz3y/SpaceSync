import PropTypes from "prop-types";
import { formatCurrency } from "../../utils/convertCurrency";

function SpaceRow({ space }) {
  const { name, max_capacity, unique_features, price } = space;
  return (
    <div className="SpaceRow">
      <div className="SpaceRow__cabin">{name}</div>
      <div className="SpaceRow__capacity">Up to {max_capacity} people</div>
      <div className="SpaceRow__features">{unique_features}</div>
      <div className="SpaceRow__price">{formatCurrency(price)}</div>
      <button>Delete</button>
    </div>
  );
}

SpaceRow.propTypes = {
  space: PropTypes.shape({
    name: PropTypes.string.isRequired,
    max_capacity: PropTypes.number.isRequired,
    unique_features: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default SpaceRow;
