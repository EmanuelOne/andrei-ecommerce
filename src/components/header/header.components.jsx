import React from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utils";
import "./header.components.scss";
const Header = ({ user }) => {
  return (
    <div className="header">
      <NavLink to="/" className="logo-container">
        <Logo className="logo" />
      </NavLink>
      <div className="options">
        <NavLink className="option" to="/shop">
          SHOP
        </NavLink>
        {user ? (
          <div
            className="option"
            style={{ cursor: "pointer" }}
            onClick={() => auth.signOut()}>
            Sign Out
          </div>
        ) : (
          <NavLink className="option" to="/signin">
            SIGN IN
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Header;
