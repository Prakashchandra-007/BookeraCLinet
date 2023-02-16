import React from "react";
import "./allcourses.css";
import Heading from "../../atoms/headingText";
import CustomButton from "../../atoms/CustomButton";
import { Star, Globe, Flag, CreditCard, Activity } from "react-feather";
import CourseCard from "../CourseCard";
const cardArr = [1, 2, 4, 5, 6, 2, 4, 2]; //for dev
function AllCourses() {
  const tabStyle = {
    backgroundColor: "#2220",
    // borderBottomWidth:'0.2em'
  };
  return (
    <div className="allCourse">
      <div className="allcourseContainer">
        <div className="courseHeader">
          <Heading styles={{ margin: "0.5em 0", color: "#e4e4e4" }}>
            Learn something new!
          </Heading>
          <div className="searchBar">
            <input type="text" placeholder="Search Course..." />
            <CustomButton
              icon={<Globe />}
              iconPosition={"left"}
              style={{ backgroundColor: "blue" }}
            >
              Search
            </CustomButton>
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
              icon={<Star />}
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
              icon={<CreditCard />}
              iconPosition={"left"}
              style={tabStyle}
            >
              Free
            </CustomButton>
          </div>
        </div>
        <div className="tagSection">
          <CustomButton
            style={{
              backgroundColor: "#2220",
              marginRight: 5,
              borderRadius: 30,
              borderWidth: 1,
              padding: "0.3em  1em",
            }}
          >
            Finance
          </CustomButton>
          <CustomButton
            style={{
              backgroundColor: "#2220",
              marginRight: 5,
              borderRadius: 30,
              borderWidth: 1,
              padding: "0.3em 1em",
            }}
          >
            Data
          </CustomButton>
        </div>
        <div className="courseGridSection">
          {cardArr.map((item, i) => {
            return <CourseCard key={item} />;
          })}
        </div>
        <div className="courseGridSectionTwo"></div>
      </div>
    </div>
  );
}

export default AllCourses;
