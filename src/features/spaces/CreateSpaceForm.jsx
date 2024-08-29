import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createSpace } from "../../../services/apiSpaces";
import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import Textarea from "../../ui/Textarea";
import FormRow from "../../ui/FormRow";
import toast from "react-hot-toast";

function CreateSpaceForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: createSpace,
    onSuccess: () => {
      toast.success("A new Space has been added for you 😊");
      queryClient.invalidateQueries({ queryKey: ["spaces"] });
      reset();
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  function onSubmit(data) {
    mutate(data);
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
          {isPending ? "Adding..." : "Add space"}
        </Button>
      </div>
    </Form>
  );
}

export default CreateSpaceForm;
