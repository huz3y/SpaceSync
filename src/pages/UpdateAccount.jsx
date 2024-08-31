import UpdatePasswordForm from "../features/authentication/UpdatePasswordForm";
import UpdateUserDataForm from "../features/authentication/UpdateUserDataForm";
import Heading from "../ui/Heading";

function UpdateAccount() {
  return (
    <>
      <Heading>
        <h1>Update your account</h1>
      </Heading>
      <div className="row--vertical">
        <h3>Update user data</h3>
        <UpdateUserDataForm />
      </div>
      <div className="row--vertical">
        <h3>Update password</h3>
        <UpdatePasswordForm />
      </div>
    </>
  );
}

export default UpdateAccount;
