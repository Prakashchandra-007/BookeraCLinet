import React from "react";
import CustomButton from "../../atoms/CustomButton";
import DropDownProfile from "../../atoms/DropDownProfile";
import "./profilecoursecard.css";

const ProfileCourseCard = ({ image, style, children }) => {
  return (
    <div className="profileCourseContainer">
      {/* <DropDownProfile/> */}

      <img
        src={image}
        style={{ height: "50%" }}
        backgroundColor="white"
        alt="course1img"
        className="course1img"
      />

      <div className="profiletitleBlock" style={{ height: "40%" }}>
        {children}
        
        <div className="profilectaBlock">
          <h1>Java Programming for Complete Beginners</h1>
          <p>HTML</p>
          <div class="container">
            <div class="skill html"></div>
          </div>
          <h1>80% Complete</h1>
          <div>
            
            <div class="rate">
              <input type="radio" id="star5" name="rate" value="5" />
              <label for="star5" title="text">
                5 stars
              </label>
              <input type="radio" id="star4" name="rate" value="4" />
              <label for="star4" title="text">
                4 stars
              </label>
              <input type="radio" id="star3" name="rate" value="3" />
              <label for="star3" title="text">
                3 stars
              </label>
              <input type="radio" id="star2" name="rate" value="2" />
              <label for="star2" title="text">
                2 stars
              </label>
              <input type="radio" id="star1" name="rate" value="1" />
              <label for="star1" title="text">
                1 star
              </label>
              <h1 className="rating">Leave a rating</h1>
            </div>
          </div>
        </div>
      </div>
      {/* <h2>card</h2> */}
    </div>
  );
};

export default ProfileCourseCard;
