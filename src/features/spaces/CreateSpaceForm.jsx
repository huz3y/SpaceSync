import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import Textarea from "../../ui/Textarea";
import FormRow from "../../ui/FormRow";
import { useCreateSpace } from "./useCreateSpace";
import { useEditSpace } from "./useEditSpace";

function CreateSpaceForm({ selectedSpace = {}, onToggle }) {
  const { createSpace, isAdding } = useCreateSpace();
  const { editSpace, isEditing } = useEditSpace();

  const isPending = isAdding || isEditing;

  const { id: editId, ...editData } = selectedSpace;
  const isEdit = Boolean(editId);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ defaultValues: isEdit ? editData : {} });

  function onSubmit(data) {
    if (isEdit) {
      editSpace(
        { newSpace: data, id: editId },
        {
          onSuccess: () => {
            reset();
            onToggle();
          },
          onError: () => {
            toast.error("Failed to update the space.");
          },
        }
      );
    } else {
      createSpace(data, {
        onSuccess: () => {
          reset();
          onToggle();
        },
        onError: () => {
          toast.error("Failed to create the space.");
        },
      });
    }
  }

  function onError() {
    toast.error("Oops! There are some errors in the form.");
  }

  function handleCancel() {
    reset({
      name: "",
      max_capacity: "",
      unique_features: "",
      price: "",
    });
    onToggle();
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
        <Button
          variation="secondary"
          type="reset"
          disabled={isPending}
          onClick={handleCancel}
        >
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
  onToggle: PropTypes.func.isRequired,
};

export default CreateSpaceForm;
