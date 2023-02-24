import React, { useState } from "react";
import CustomButton from "../../atoms/CustomButton";
import DropDownProfile from "../../atoms/DropDownProfile";
import courseCover from "../../../asserts/images/element/card1Img.jpg";
import "./profilecoursecard.css";
import NormalText from "../../atoms/NormalText";
import { BiDotsVerticalRounded } from "react-icons/bi";

const ProfileCourseCard = ({
  image,
  style,
  children,
  completionPercentage,
}) => {
  const [openDrop, setOpenDrop] = useState(false);
  return (
    <div className="profileCourseContainer">
      {openDrop && <DropDownProfile />}
      <div className="optionBtn">
        <button
          onClick={() => {
            setOpenDrop((ps) => !ps);
          }}
        >
          <BiDotsVerticalRounded fontSize={"2em"} color="black" />
        </button>
      </div>
      <div className="ImgDiv">
        <img
          src={courseCover}
          style={{ height: "20%" }}
          backgroundColor="white"
          alt="course1img"
          className="course1img"
        />
      </div>

      <div className="profiletitleBlock" style={{ height: "40%" }}>
        <div className="profilectaBlock">
          <NormalText style={{ color: "#000000", fontWeight: "bold" }}>
            Java Programming for Complete Beginners
          </NormalText>
          <NormalText style={{ color: "#000000", marginBottom: "2%" }}>
            Finance Business
          </NormalText>

          <div class="container">
            <div
              style={{ width: `${completionPercentage}%` }}
              class="progressbarCourse"
            ></div>
          </div>
          <NormalText style={{ color: "#000000" }}>
            {completionPercentage}% Complete
          </NormalText>

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
              <NormalText style={{ color: "#000000" }}>
                Leave a rating
              </NormalText>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCourseCard;
