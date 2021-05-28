import React from "react";
import { withRouter } from "react-router";
import { NavLink } from "react-router-dom";
import "./menuItem.style.scss";

const MenuItem = ({ title, imageUrl, size, linkUrl }) => {
  return (
    <NavLink to={`${linkUrl}`} className={`${size || ""} menu-item`}>
      <div
        className="background"
        style={{ backgroundImage: `url(${imageUrl})` }}></div>
      <div className="content">
        <h1 className="title">{title || "Hats"}</h1>
        <span className="subtitle">Shop Now</span>
      </div>
    </NavLink>
  );
};
export default withRouter(MenuItem);
