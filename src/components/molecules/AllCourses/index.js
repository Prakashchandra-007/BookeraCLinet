import React from "react";
import "./allcourses.css";
import Heading from "../../atoms/headingText";
import CustomButton from "../../atoms/CustomButton";
function AllCourses() {
  const tabStyle = {
    backgroundColor:"#2220",
    // borderBottomWidth:'0.2em'
  }
  return (
    <div className="allCourse">
      <div className="allcourseContainer">
        <div className="courseHeader">
         <Heading styles={{marginBottom:'0.5em',color:"#fffff"}}>Learn something new!</Heading>
         <div className="searchBar">asdfads</div>
         <div className="stickyHeader">
          <CustomButton style={tabStyle} >Browse All</CustomButton><CustomButton style={tabStyle}>Browse All</CustomButton><CustomButton style={tabStyle}>Browse All</CustomButton><CustomButton style={tabStyle}>Browse All</CustomButton>
         </div>
        </div>
        <div className="tagSection"></div>
        <div className="couseGridSection"></div>
        
      </div>
    </div>
  );
}

export default AllCourses;
