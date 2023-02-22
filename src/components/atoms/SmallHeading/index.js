import React from "react";
import "./smallHeading.css";

const SmallHeading = ({ children, style }) => {
  return (
    <h4 style={style} className="smallheading">
      {children}
    </h4>
  );
};

export default SmallHeading;
