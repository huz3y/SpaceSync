import { useForm } from "react-hook-form";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Spinner from "../../ui/Spinner";
import { useSettings } from "./useSettings";
import { useUpdateSetting } from "./useUpdateSetting";

function UpdateSettingsForm() {
  const { data, isLoading } = useSettings();
  const { min_hour, max_hour, max_people } = data || {};

  const { isUpdating, updateSetting } = useUpdateSetting();

  const {
    register,
    formState: { errors },
    trigger,
  } = useForm();

  function handleUpdate(e, field) {
    const { value } = e.target;
    if (!value) return;

    // Validate the field before updating
    trigger(field).then((valid) => {
      if (valid) {
        updateSetting({ [field]: value });
      }
    });
  }

  if (isLoading) return <Spinner />;

  return (
    <Form style={{ position: "relative" }}>
      <FormRow label="Minimum hours/booking" error={errors.min_hour}>
        <Input
          type="number"
          id="min_hour"
          {...register("min_hour", {
            required: "Minimum hours is required",
            min: {
              value: 1,
              message: "Minimum hours must be at least 1",
            },
            onBlur: (e) => handleUpdate(e, "min_hour"),
          })}
          disabled={isUpdating}
          defaultValue={min_hour}
        />
      </FormRow>
      <FormRow label="Maximum hours/booking" error={errors.max_hour}>
        <Input
          type="number"
          id="max_hour"
          {...register("max_hour", {
            required: "Maximum hours is required",
            min: {
              value: 1,
              message: "Maximum hours must be at least 1",
            },
            onBlur: (e) => handleUpdate(e, "max_hour"),
          })}
          disabled={isUpdating}
          defaultValue={max_hour}
        />
      </FormRow>
      <FormRow label="Maximum people" error={errors.max_people}>
        <Input
          type="number"
          id="max_people"
          {...register("max_people", {
            required: "Maximum people is required",
            min: {
              value: 1,
              message: "Maximum people must be at least 1",
            },
            onBlur: (e) => handleUpdate(e, "max_people"),
          })}
          disabled={isUpdating}
          defaultValue={max_people}
        />
      </FormRow>
    </Form>
  );
}

export default UpdateSettingsForm;
