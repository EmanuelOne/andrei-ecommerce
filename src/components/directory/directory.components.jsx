import React, { useState } from "react";
import MenuItem from "../menu-items/menuItem";
import data from "../../directory.data.json";
import "./directory.components.scss";
const Directory = () => {
  // eslint-disable-next-line
  const [section, setState] = useState(data);
  return (
    <div className="directory-menu">
      {section.map(({ id, ...others }) => (
        <MenuItem key={id} {...others} />
      ))}
    </div>
  );
};

export default Directory;
