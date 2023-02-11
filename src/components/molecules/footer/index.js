import { Heading } from "@chakra-ui/react";
import React from "react";
import "./footer.css";
function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="footer">
      <div className="footContainer"></div>
      <div className="socialIconsGroup">
        <p style={{ color: "white" }}>
          All Copyright reserved by bookera © {currentYear}
        </p>
      </div>
    </div>
  );
}

export default Footer;
