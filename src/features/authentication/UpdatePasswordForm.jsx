import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import { useUpdateUser } from "./useUpdateUser";

function UpdatePasswordForm() {
  const { register, handleSubmit, formState, getValues, reset } = useForm();
  const { errors } = formState;

  const { updateUser, isUpdating } = useUpdateUser();

  function onSubmit({ password }) {
    updateUser({ password }, { onSuccess: reset });
  }

  return (
    <Form className="update-password-form" onSubmit={handleSubmit(onSubmit)}>
      <FormRow
        label="New password (min 8 chars)"
        error={errors?.password?.message}
        className="update-password-form__row"
      >
        <Input
          type="password"
          id="password"
          autoComplete="current-password"
          className="update-password-form__input"
          disabled={isUpdating}
          {...register("password", {
            required: "This field is required",
            minLength: {
              value: 8,
              message: "Password needs a minimum of 8 characters",
            },
          })}
        />
      </FormRow>

      <FormRow
        label="Confirm password"
        error={errors?.passwordConfirm?.message}
        className="update-password-form__row"
      >
        <Input
          type="password"
          autoComplete="new-password"
          id="passwordConfirm"
          className="update-password-form__input"
          disabled={isUpdating}
          {...register("passwordConfirm", {
            required: "This field is required",
            validate: (value) =>
              getValues().password === value || "Passwords need to match",
          })}
        />
      </FormRow>

      <div className="update-password-form__buttons">
        <Button
          onClick={reset}
          type="reset"
          variation="secondary"
          className="update-password-form__button"
        >
          Cancel
        </Button>
        <Button
          type="submit"
          disabled={isUpdating}
          className="update-password-form__button"
        >
          Update password
        </Button>
      </div>
    </Form>
  );
}

export default UpdatePasswordForm;
