import { useState } from "react";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import { useLogin } from "./useLogin";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login, isLoading } = useLogin();

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;
    login({ email, password });
  }

  return (
    <Form onSubmit={handleSubmit} className="custom-form">
      <div className="custom-form__logo">
        <img src="/logo.png" alt="Logo" />
      </div>

      <FormRow
        label="Email address"
        orientation="vertical"
        className="custom-form__row"
      >
        <Input
          type="email"
          id="email"
          autoComplete="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isLoading}
        />
      </FormRow>

      <FormRow
        label="Password"
        orientation="vertical"
        className="custom-form__row"
      >
        <Input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={isLoading}
        />
      </FormRow>

      <FormRow
        orientation="vertical"
        className="custom-form__row custom-form__row--button"
      >
        <Button size="large" onClick={handleSubmit} disabled={isLoading}>
          Login
        </Button>
      </FormRow>
    </Form>
  );
}

export default LoginForm;
