import React from "react";
import { useState } from "react";

import "./SignIn.scss";
import FormInput from "../form-input/FormInput";
import CustomButton from "../custom-button/CustomButton";

const SignIn = () => {
  const [email, setEmail] = useState(``);
  const [password, setPassword] = useState(``);

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail(``);
    setPassword(``);
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    name === `email` ? setEmail(value) : setPassword(value);
  };
  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          value={email}
          label="email"
          handleChange={handleChange}
          required
        />
        <FormInput
          name="password"
          type="password"
          value={password}
          label="password"
          handleChange={handleChange}
          required
        />
        <CustomButton type="submit">Sign in</CustomButton>
      </form>
    </div>
  );
};

export default SignIn;
