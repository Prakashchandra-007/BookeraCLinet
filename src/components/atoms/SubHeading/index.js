import React from "react";
import "./subHeading.css";
const SubHeading = ({ children, styles }) => {
  return (
    <h1 style={styles} className="subheading">
      {children}
    </h1>
  );
};
export default SubHeading;
