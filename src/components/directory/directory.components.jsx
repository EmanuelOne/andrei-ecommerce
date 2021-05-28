import React, { useState } from "react";
import MenuItem from "../menu-items/menuItem";
import data from "../../directory.data.json";
import "./directory.components.scss";
const Directory = () => {
  const [section, setSection] = useState(data);
  return (
    <div className="directory-menu">
      {section.map(({ title, id, imageUrl, size }) => (
        <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
      ))}
    </div>
  );
};

export default Directory;
