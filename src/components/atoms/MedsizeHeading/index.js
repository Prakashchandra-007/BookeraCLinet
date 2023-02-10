import React from "react";
import "./medsizeheading.css"

const MedsizeHeading = ({ children, styles }) => {
  return (
    <h2 style={styles} className="medsizeheading">
      {children}
    </h2>
  );
};

export default MedsizeHeading;
