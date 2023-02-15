import React from "react";
import CustomButton from "../../atoms/CustomButton";
import SubHeading from "../../atoms/SubHeading";
import "./courseCard.css";
import { ArrowRight } from "react-feather";
function CourseCard({ image, style, children }) {
  return (
    <div className="courseCard">
      <div style={{ height: "40%" }}>
        <img
          src={image}
          style={{ height: "100%" }}
          alt="course1img"
          className="course1img"
        />
      </div>
      <div className="titleBlock" style={{ height: "40%" }}>
        {children}
      </div>
      <div className="ctaBlock">
        <CustomButton
          icon={<ArrowRight />}
          iconPosition={"right"}
          style={{
            color: "#ffffff",
            borderWidth: "0.1em",
            borderColor: "#ffffff",
            backgroundColor: "#2220",
          }}
        >
          Preview
        </CustomButton>
      </div>
    </div>
  );
}

export default CourseCard;
