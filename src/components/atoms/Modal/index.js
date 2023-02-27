import React from "react";
import "./modal.css";
function Modal({ children }) {
  return <div className="modalContainer">{children}</div>;
}

export default Modal;
