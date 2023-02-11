import React from "react";
import "./normalText.css";
function NormalText({ children , style }) {
  return <h3 className="normalText" style={style}>{children}</h3>;
}

export default NormalText;
