import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import { useSignup } from "./useSignup";

function SignupForm() {
  const { signup, isLoading } = useSignup();
  const { register, formState, getValues, handleSubmit, reset } = useForm();
  const { errors } = formState;

  function onSubmit({ fullName, email, password }) {
    signup(
      { fullName, email, password },
      {
        onSettled: () => reset(),
      }
    );
  }

  return (
    <Form className="signup-form" onSubmit={handleSubmit(onSubmit)}>
      <FormRow
        label="Full name"
        error={errors?.fullName?.message}
        className="signup-form__row"
      >
        <Input
          type="text"
          id="fullName"
          className="signup-form__input"
          disabled={isLoading}
          {...register("fullName", { required: "Full name is required" })}
        />
      </FormRow>

      <FormRow
        label="Email address"
        error={errors?.email?.message}
        className="signup-form__row"
      >
        <Input
          type="email"
          id="email"
          className="signup-form__input"
          disabled={isLoading}
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Invalid email address",
            },
          })}
        />
      </FormRow>

      <FormRow
        label="Password (min 8 characters)"
        error={errors?.password?.message}
        className="signup-form__row"
      >
        <Input
          type="password"
          id="password"
          className="signup-form__input"
          disabled={isLoading}
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters",
            },
          })}
        />
      </FormRow>

      <FormRow
        label="Repeat password"
        error={errors?.passwordConfirm?.message}
        className="signup-form__row"
      >
        <Input
          type="password"
          id="passwordConfirm"
          className="signup-form__input"
          disabled={isLoading}
          {...register("passwordConfirm", {
            required: "Please confirm your password",
            validate: (value) =>
              value === getValues().password || "Passwords must match",
          })}
        />
      </FormRow>

      <div className="signup-form__buttons">
        <Button
          variation="secondary"
          type="reset"
          disabled={isLoading}
          onClick={reset}
        >
          Cancel
        </Button>
        <Button disabled={isLoading} type="submit">
          Create new user
        </Button>
      </div>
    </Form>
  );
}

export default SignupForm;
