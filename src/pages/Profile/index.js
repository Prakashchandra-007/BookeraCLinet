import React from "react";
// import Image from "../asserts/images/imageprofilesec/imageprofile.png";
import Image from "../../asserts/images/imageprofilesec/imageprofile.png";
import CustomButton from "../../components/atoms/CustomButton";
import card1Img from "../../asserts/images/element/card1Img.jpg";

import Heading from "../../components/atoms/headingText";
import SmallHeading from "../../components/atoms/SmallHeading";
import "./profile.css";
import SubHeading from "../../components/atoms/SubHeading";
import CourseCard from "../../components/molecules/CourseCard";

const cardArr = [1, 2, 4, 5, 6, 2, 4, 2];
const menus = ["All courses", "My list", "Wishlist", "Career hunt"];
const Profile = ({ username, price }) => {
  return (
    <div className="profileContainer">
      <div className="profileHeaderSection">
        <Heading styles={{ color: "white" }}>My Learning</Heading>
      </div>
      <div className="prfileStickyMenu">
        {/* <h2>asdfasf</h2> */}
        {menus.map((item) => {
          return (
            <button className="stickybatBtn">
              <h2> {item} </h2>
            </button>
          );
        })}
      </div>
      <div className="profileMylearning">
        <div className="profileCourse">
          {/* <div className="courseGridSection"> */}
          {cardArr.map((item, i) => {
            return (
              <CourseCard key={item} image={card1Img}>
                <SmallHeading
                  className="cardstrans"
                  styles={{ color: "white" }}
                >
                  Educative
                </SmallHeading>
                <SubHeading styles={{ color: "white", textAlign: "left" }}>
                  Grokking the Machine Learning Interview
                </SubHeading>
              </CourseCard>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Profile;
