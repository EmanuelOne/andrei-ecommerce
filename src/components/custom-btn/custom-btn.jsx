import React from "react";
import "./custom-btn.scss";
const Button = ({ isGoogleSignIn, children, ...otherProps }) => {
  return (
    <button
      className={`${isGoogleSignIn ? "google-sign-in" : ""} custom-button`}
      {...otherProps}>
      {children}
    </button>
  );
};

export default Button;
