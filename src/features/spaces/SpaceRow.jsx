import { useState } from "react";
import PropTypes from "prop-types";
import { formatCurrency } from "../../utils/convertCurrency";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteSpace } from "../../../services/apiSpaces";
import toast from "react-hot-toast";
import CreateSpaceForm from "./CreateSpaceForm";

function SpaceRow({ space }) {
  const [hideForm, setHideForm] = useState(true);

  const { id: spaceId, name, max_capacity, unique_features, price } = space;

  const queryClient = useQueryClient();

  const { isPending, mutate } = useMutation({
    mutationFn: (id) => deleteSpace(id),
    onSuccess: () => {
      toast.success("The Space was deleted 😊");
      queryClient.invalidateQueries({ queryKey: ["spaces"] });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return (
    <>
      <div className="SpaceRow">
        <div className="SpaceRow__space">{name}</div>
        <div className="SpaceRow__capacity">Up to {max_capacity} people</div>
        <div className="SpaceRow__features">{unique_features}</div>
        <div className="SpaceRow__price">{formatCurrency(price)}</div>
        <div>
          <button onClick={() => setHideForm(!hideForm)}>Edit</button>
          <button onClick={() => mutate(spaceId)} disabled={isPending}>
            Delete
          </button>
        </div>
      </div>
      {!hideForm && <CreateSpaceForm selectedSpace={space} />}
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
