import React from "react";
// import Image from "../asserts/images/imageprofilesec/imageprofile.png";
import Image from "../../asserts/images/imageprofilesec/imageprofile.png";

import Heading from "../../components/atoms/headingText";
import SmallHeading from "../../components/atoms/SmallHeading";
import "./profile.css";

const Profile = ({ username, price }) => {
  return (
    <div className="profileContainer">
      <div className="profileHead">
      <img src={Image} />
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
        <h1>Let's start leraning,{username}</h1>
        <div className="profileCourse">jnjn</div>
      </div>
    </div>
  );
};

export default Profile;
