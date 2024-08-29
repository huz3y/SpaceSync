import { useState } from "react";
import PropTypes from "prop-types";
import { formatCurrency } from "../../utils/convertCurrency";
import { FiEdit, FiXCircle, FiTrash2 } from "react-icons/fi";
import CreateSpaceForm from "./CreateSpaceForm";
import { useDeleteSpace } from "./useDeleteSpace";

function SpaceRow({ space }) {
  const [hideForm, setHideForm] = useState(true);

  const { id: spaceId, name, max_capacity, unique_features, price } = space;

  const { isPending, mutate } = useDeleteSpace();

  const toggleForm = () => setHideForm((prevHideForm) => !prevHideForm);

  const handleDelete = () => {
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this space?"
    );
    if (isConfirmed) {
      mutate(spaceId);
    }
  };

  return (
    <>
      <div className="SpaceRow">
        <div className="SpaceRow__space">{name}</div>
        <div className="SpaceRow__capacity">Up to {max_capacity} people</div>
        <div className="SpaceRow__features">{unique_features}</div>
        <div className="SpaceRow__price">{formatCurrency(price)}</div>
        <div className="SpaceRow__actions">
          <button
            className="button button--icon button--secondary"
            onClick={toggleForm}
            aria-label={hideForm ? "Edit Space" : "Close Edit Form"}
          >
            {hideForm ? <FiEdit /> : <FiXCircle />}
          </button>
          <button
            className="button button--icon button--danger"
            onClick={handleDelete}
            disabled={isPending}
            aria-label="Delete Space"
          >
            <FiTrash2 />
          </button>
        </div>
      </div>
      {!hideForm && (
        <CreateSpaceForm selectedSpace={space} onToggle={toggleForm} />
      )}
    </>
  );
}

SpaceRow.propTypes = {
  space: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    max_capacity: PropTypes.number.isRequired,
    unique_features: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default SpaceRow;
