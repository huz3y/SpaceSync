import { useState } from "react";

import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";

import { useUser } from "./useUser";
import { useUpdateUser } from "./useUpdateUser";

function UpdateUserDataForm() {
  const {
    user: {
      email,
      user_metadata: { fullName: currentFullName },
    },
  } = useUser();

  const { updateUser, isUpdating } = useUpdateUser();

  const [fullName, setFullName] = useState(currentFullName);
  const [avatar, setAvatar] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    if (!fullName) return;
    updateUser(
      { fullName, avatar },
      {
        onSuccess: () => {
          setAvatar(null);
          e.target.reset();
        },
      }
    );
  }

  function handleCancel() {
    setFullName(currentFullName);
    setAvatar(null);
  }

  return (
    <Form className="update-user-data-form" onSubmit={handleSubmit}>
      <FormRow label="Email address" className="update-user-data-form__row">
        <Input
          value={email}
          disabled
          className="update-user-data-form__input"
        />
      </FormRow>

      <FormRow label="Full name" className="update-user-data-form__row">
        <Input
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          id="fullName"
          disabled={isUpdating}
          className="update-user-data-form__input"
        />
      </FormRow>

      <FormRow label="Avatar image" className="update-user-data-form__row">
        <FileInput
          id="avatar"
          accept="image/*"
          onChange={(e) => setAvatar(e.target.files[0])}
          disabled={isUpdating}
          className="update-user-data-form__input"
        />
      </FormRow>

      <div className="update-user-data-form__buttons">
        <Button
          type="reset"
          variation="secondary"
          disabled={isUpdating}
          onClick={handleCancel}
        >
          Cancel
        </Button>
        <Button disabled={isUpdating} type="submit">
          Update account
        </Button>
      </div>
    </Form>
  );
}

export default UpdateUserDataForm;
