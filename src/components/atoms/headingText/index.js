import React from "react";
import "./heading.css";

const HeadingText = ({ children, styles }) => {
  return (
    <h1 style={styles} className="heading">
      {children}
    </h1>
  );
};
export default HeadingText;
