import React from "react";
import { useState } from "react";
import { data } from "./DirectoryData";
import MenuItem from "../menu-item/MenuItem";
import "./Directory.scss";

const Directory = () => {
  const [sections, setSections] = useState(data);

  return (
    <div className="directory-menu">
      {sections.map(({ title, imageUrl, id, size }) => {
        return (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
        );
      })}
    </div>
  );
};

export default Directory;
