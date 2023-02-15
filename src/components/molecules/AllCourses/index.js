import React from "react";
import "./allcourses.css";
import Heading from "../../atoms/headingText";
import CustomButton from "../../atoms/CustomButton";
import { Star, Globe, Flag, CreditCard, Activity } from "react-feather";

function AllCourses() {
  const tabStyle = {
    backgroundColor: "#2220",
    // borderBottomWidth:'0.2em'
  };
  return (
    <div className="allCourse">
      <div className="allcourseContainer">
        <div className="courseHeader">
          <Heading styles={{ marginBottom: "0.5em", color: "#fffff" }}>
            Learn something new!
          </Heading>
          <div className="searchBar">
            <input
              type="text"
              placeholder="Search Course..."
            />
          </div>
          <div className="stickyHeader">
            <CustomButton
              icon={<Globe />}
              iconPosition={"left"}
              style={tabStyle}
            >
              Browse All
            </CustomButton>
            <CustomButton
              icon={<Star/>}
              iconPosition={"left"}
              style={tabStyle}
            >
              Our Picks
            </CustomButton>
            <CustomButton
              icon={<Activity />}
              iconPosition={"left"}
              style={tabStyle}
            >
              New
            </CustomButton>
            <CustomButton
              icon={<Flag />}
              iconPosition={"left"}
              style={tabStyle}
            >
              Early Access
            </CustomButton>
            <CustomButton
              icon={<CreditCard/>}
              iconPosition={"left"}
              style={tabStyle}
            >
              Free
            </CustomButton>
          </div>
        </div>
        <div className="tagSection"></div>
        <div className="couseGridSection"></div>
      </div>
    </div>
  );
}

export default AllCourses;
