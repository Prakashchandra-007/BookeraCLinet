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

const Profile = ({ username, price }) => {
  return (
    <div className="profileContainer">
      <div className="profileHead">
      <img src={Image} style={{display:"flex" ,flexDirection:"column",flexWrap:"wrap-reverse"}}/>
        <div
          className="profileNameCard"
          style={{ minWidhth: "200", maxHeight: "200" }}
        >
        
          <Heading>Welcome back,{username}!</Heading>
          <SmallHeading>
            Make today the day.Get courses from real-world experts from ₹{price}{" "}
          </SmallHeading>
        </div>
      </div>
      <div className="profileMylearning">
        <CustomButton style={{color:"blue",backgroundColor: 'transparent', textDecoration: 'underline blue', paddingLeft:"80%", top:"20"}}>My Learning</CustomButton>
        <Heading>Let's start leraning,{username}</Heading>
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
