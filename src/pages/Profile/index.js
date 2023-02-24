import React from "react";
// import card1Img from "../../"
import Heading from "../../components/atoms/headingText";
import SmallHeading from "../../components/atoms/SmallHeading";
import "./profile.css";
import SubHeading from "../../components/atoms/SubHeading";
import CourseCard from "../../components/molecules/CourseCard";
import ProfileCourseCard from "../../components/molecules/ProfileCourseCard";
import SideNavBar from "../../components/molecules/SideNavBar";
const cardArr = [1, 2, 4, 5, 6, 2, 4, 2];
const menus = ["All courses", "My list", "Wishlist", "Career hunt"];
const Profile = ({ username, price }) => {
  return (
    <div className="profileContainer">
      <SideNavBar />
      <div className="profileHeaderSection">
        <Heading styles={{ color: "white" }}>My Learning</Heading>
      </div>
      <div className="prfileStickyMenu">
        {menus.map((item) => {
          return (
            <button className="stickybatBtn">
              <h2> {item} </h2>
            </button>
          );
        })}
      </div>
      <div className="courseGrid">
        <ProfileCourseCard completionPercentage={23} />
        <ProfileCourseCard completionPercentage={53} />
        <ProfileCourseCard completionPercentage={73} />
        <ProfileCourseCard completionPercentage={83} />
        <ProfileCourseCard completionPercentage={10} />
        <ProfileCourseCard completionPercentage={10} />
        <ProfileCourseCard completionPercentage={20} />
      </div>
    </div>
  );
};

export default Profile;
