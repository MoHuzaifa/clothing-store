import React from "react";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
import { useState } from "react";

import FormInput from "../form-input/FormInput";
import CustomButton from "../custom-button/CustomButton";
import "./SignUp.scss";

const SignUp = () => {
  const [displayName, setDisplayName] = useState(``);
  const [email, setEmail] = useState(``);
  const [password, setPassword] = useState(``);
  const [confirmPassword, setConfirmPassword] = useState(``);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert(`Passwords do not match!`);
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      createUserProfileDocument(user, { displayName });
      setDisplayName(``);
      setEmail(``);
      setPassword(``);
      setConfirmPassword(``);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "displayName") setDisplayName(value);
    else if (name === "email") setEmail(value);
    else if (name === "password") setPassword(value);
    else if (name === "confirmPassword") setConfirmPassword(value);
  };

  return (
    <div className="sign-up">
      <h2>I do not have an account</h2>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          label="Display Name"
          required
        />
        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          label="Paasword"
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          label="Confirm Paasword"
          required
        />
        <CustomButton type="submit">Sign Up</CustomButton>
      </form>
    </div>
  );
};

export default SignUp;
