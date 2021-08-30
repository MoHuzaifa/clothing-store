import React from "react";

import "./CustomButton.scss";

const CustomButton = ({
  children,
  isGoogleSignIn,
  inverted,
  ...otherProps
}) => {
  return (
    <button
      data-testid="customButton-1"
      className={`${inverted ? `inverted` : ``} ${
        isGoogleSignIn ? `google-sign-in` : ``
      } custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
