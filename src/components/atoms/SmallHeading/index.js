import React from "react";
import "./smallHeading.css";

const SmallHeading = ({ children, styles }) => {
  return (
    <h4 style={styles} className="smallheading">
      {children}
    </h4>
  );
};

export default SmallHeading;
