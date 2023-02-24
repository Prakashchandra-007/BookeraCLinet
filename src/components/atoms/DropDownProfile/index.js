import React, { useRef, useState } from "react";
import NormalText from "../NormalText";
import "./threedot.css";

const DropDownProfile = () => {
  const optionsItems = ["Share", "Create new List", "Favorites", "Archive"];

  return (
    <div class="dropdown">
      <ul>
        {optionsItems.map((item) => {
          return (
            <li>
              <h3>{item}</h3>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default DropDownProfile;
