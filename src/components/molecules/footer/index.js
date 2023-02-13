// import { Heading } from "@chakra-ui/react";
import { color } from "@chakra-ui/styled-system";
import React from "react";
import CustomButton from "../../atoms/CustomButton";
import NormalText from "../../atoms/NormalText";
import "./footer.css";
function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="footer">
      <div className="footContainer">
        <div className="footerRow">
          <ul>
            <li>
              <NormalText style={{ color: "white", fontWeight: "600" }}>
                PRODUCTS
              </NormalText>
            </li>
            <li>
              <NormalText style={{ color: "white", fontWeight: "100" }}>
                Educative Learning
              </NormalText>
            </li>
            <li>
              <NormalText style={{ color: "white", fontWeight: "100" }}>
                Educative Onboarding
              </NormalText>
            </li>
            <li>
              <NormalText style={{ color: "white", fontWeight: "100" }}>
                Educative Skill Assessments
              </NormalText>
            </li>
            <li>
              <NormalText style={{ color: "white", fontWeight: "100" }}>
                Educative Projects
              </NormalText>
            </li>
          </ul>
        </div>
        <div className="footerRow">
          <ul>
            <li>
              <NormalText style={{ color: "white" }}>PRICING</NormalText>
            </li>
            <li>
              <NormalText style={{ color: "white", fontWeight: "100" }}>
                For Enterprise
              </NormalText>
            </li>
            <li>
              <NormalText style={{ color: "white", fontWeight: "100" }}>
                For Individuals
              </NormalText>
            </li>
            <li>
              <NormalText style={{ color: "white", fontWeight: "100" }}>
                Free Trial
              </NormalText>
            </li>
          </ul>
        </div>
        <div className="footerRow">
          <ul>
            <li>
              <NormalText style={{ color: "white" }}>LEGAL</NormalText>
            </li>
            <li>
              <NormalText style={{ color: "white", fontWeight: "100" }}>
                Privacy Policy
              </NormalText>
            </li>
            <li>
              <NormalText style={{ color: "white", fontWeight: "100" }}>
                Terms of Service
              </NormalText>
            </li>
            <li>
              <NormalText style={{ color: "white", fontWeight: "100" }}>
                Business Terms of Service
              </NormalText>
            </li>
          </ul>
        </div>
        <div className="footerRow">
          <ul>
            <li>
              <NormalText style={{ color: "white" }}>ABOUT US</NormalText>
            </li>
            <li>
              <NormalText style={{ color: "white", fontWeight: "100" }}>
                Our Team
              </NormalText>
            </li>
            <li>
              <NormalText style={{ color: "white", fontWeight: "100" }}>
                Careers
                <CustomButton
                  style={{
                    padding: "0.2em",
                    marginLeft: "0.3em",
                    backgroundColor: "yellow",
                    color: "#000000",
                  }}
                >
                  <NormalText style={{ fontSize: "0.8em", fontWeight: "bold" }}>
                    Hiring
                  </NormalText>
                </CustomButton>
              </NormalText>
            </li>
            <li>
              <NormalText style={{ color: "white", fontWeight: "100" }}>
                Frequently Asked Questions
              </NormalText>
            </li>
            <li>
              <NormalText style={{ color: "white", fontWeight: "100" }}>
                Contact Us
              </NormalText>
            </li>
            <li>
              <NormalText style={{ color: "white", fontWeight: "100" }}>
                Press
              </NormalText>
            </li>
          </ul>
        </div>
      </div>
      <div className="socialIconsGroup">
        <p style={{ color: "white" }}>
          All Copyright reserved by bookera © {currentYear}
        </p>
      </div>
    </div>
  );
}

export default Footer;
