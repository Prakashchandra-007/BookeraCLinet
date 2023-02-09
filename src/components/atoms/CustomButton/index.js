import { Button } from "@chakra-ui/react";
import React from "react";
import "./customButton.css";
import colours from "../../../contants/colours";
function CustomButton({ children, width, height, callback }) {
  return (
    <button
      style={{ backgroundColor: colours.PRIMARY, width: width, height: height }}
      onClick={callback}
      className="customButton"
    >
      {children}
    </button>
  );
}

export default CustomButton;
