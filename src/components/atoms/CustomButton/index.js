import React from "react";
import "./customButton.css";
import colours from "../../../contants/colours";
function CustomButton({ children, width, height, callback }) {
  return (
    <button
      style={{ width: width, height: height }}
      onClick={callback}
      className="customButton"
    >
      {children}
    </button>
  );
}

export default CustomButton;
