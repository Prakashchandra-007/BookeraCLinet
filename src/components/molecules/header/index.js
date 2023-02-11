import React from "react";
import "./header.css";
function Header({ children, style }) {
  return (
    <div className="header" style={style}>
      {children}
    </div>
  );
}

export default Header;
