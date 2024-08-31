import SignupForm from "../features/authentication/SignupForm";
import Heading from "../ui/Heading";

function CreateUser() {
  return (
    <>
      <Heading>
        <h1>Create a new user</h1>
      </Heading>
      <SignupForm />
    </>
  );
}

export default CreateUser;
