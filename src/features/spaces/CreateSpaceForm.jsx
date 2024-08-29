import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { mutateSpace } from "../../../services/apiSpaces";
import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import Textarea from "../../ui/Textarea";
import FormRow from "../../ui/FormRow";

function CreateSpaceForm({ selectedSpace = {} }) {
  const { id: editId, ...editData } = selectedSpace;
  const isEdit = Boolean(editId);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ defaultValues: isEdit ? editData : {} });
  const queryClient = useQueryClient();

  //Adding a new space
  const { mutate: createSpace, isPending: isAdding } = useMutation({
    mutationFn: mutateSpace,
    onSuccess: () => {
      toast.success("A new Space has been added for you 😊");
      queryClient.invalidateQueries({ queryKey: ["spaces"] });
      reset();
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  //Editing an existing space
  const { mutate: editSpace, isPending: isEditing } = useMutation({
    mutationFn: ({ newSpace, id }) => mutateSpace(newSpace, id),
    onSuccess: () => {
      toast.success("Your space has been updated! 🌟");
      queryClient.invalidateQueries({ queryKey: ["spaces"] });
      reset();
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  const isPending = isAdding || isEditing;

  function onSubmit(data) {
    if (isEdit) editSpace({ newSpace: data, id: editId });
    else createSpace(data);
  }

  function onError() {
    toast.error("Oops! There are some errors in the form.");
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)}>
      <FormRow label="Space name" id="name" error={errors.name}>
        <Input
          type="text"
          id="name"
          {...register("name", {
            required: "Space name is required",
          })}
          disabled={isPending}
        />
      </FormRow>

      <FormRow
        label="Maximum capacity"
        id="max_capacity"
        error={errors.max_capacity}
      >
        <Input
          type="number"
          id="max_capacity"
          {...register("max_capacity", {
            required: "Maximum capacity is required",
            min: {
              value: 1,
              message: "Maximum capacity must be at least 1",
            },
          })}
          disabled={isPending}
        />
      </FormRow>

      <FormRow
        label="Features"
        id="unique_features"
        error={errors.unique_features}
      >
        <Textarea
          id="unique_features"
          {...register("unique_features", {
            required: "Features are required",
            minLength: {
              value: 5,
              message:
                "Features description should be at least 5 characters long",
            },
          })}
          placeholder="Describe the features"
          disabled={isPending}
        />
      </FormRow>

      <FormRow label="Price" id="price" error={errors.price}>
        <Input
          type="number"
          id="price"
          {...register("price", {
            required: "Price is required",
            min: {
              value: 10,
              message: "Price must be at least 10",
            },
          })}
          disabled={isPending}
        />
      </FormRow>

      <div className="form__row form__row--button">
        <Button variation="secondary" type="reset" disabled={isPending}>
          Cancel
        </Button>
        <Button type="submit" disabled={isPending}>
          {isPending
            ? isEdit
              ? "Updating..."
              : "Adding..."
            : isEdit
            ? "Update Space"
            : "Add Space"}
        </Button>
      </div>
    </Form>
  );
}

CreateSpaceForm.propTypes = {
  selectedSpace: PropTypes.object,
};

export default CreateSpaceForm;
