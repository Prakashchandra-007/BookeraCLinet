import React, { useState } from "react";
import "./humberg.css";
function HumbergBtn() {
  const [dropdown, setDropdown] = useState(false);
  return (
    <div className="humbergbtnContainer">
      <button
        onClick={() => {
          setDropdown((ps) => !ps);
        }}
        style={{ color: "#fffff", backgroundColor: "#ffff" }}
      >
        | | |
      </button>
      {dropdown && (
        <div className="dropdownMenu">
          <ul>
            <li>Home</li>
            <li>Profile</li>
            <li>All Course</li>
            <li>Login</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default HumbergBtn;
