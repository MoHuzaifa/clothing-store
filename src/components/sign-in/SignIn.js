import React from "react";
import { useState } from "react";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

import "./SignIn.scss";
import FormInput from "../form-input/FormInput";
import CustomButton from "../custom-button/CustomButton";

const SignIn = () => {
  const [email, setEmail] = useState(``);
  const [password, setPassword] = useState(``);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(email, password);
      setEmail(``);
      setPassword(``);
    } catch (error) {
      console.log(error);
    }
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
        <div className="buttons">
          <CustomButton type="submit">Sign in</CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
            Sign in with Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
