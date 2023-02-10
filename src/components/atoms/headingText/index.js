import React from "react";
import "./heading.css";

const Heading = ({ children, styles }) => {
  return (
    <h1 style={styles} className="heading">
      {children}
    </h1>
  );
};
export default Heading;
