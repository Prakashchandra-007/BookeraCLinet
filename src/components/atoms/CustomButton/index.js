import React from "react";
import "./customButton.css";
import colours from "../../../contants/colours";
function CustomButton({ children, width, height, callback, style }) {
  const styles = {...style , width: width, height: height};

  return (
    <button
      style={styles}
      
      onClick={callback}
      className="customButton"
    >
      {children}
    </button>
  );
}

export default CustomButton;
