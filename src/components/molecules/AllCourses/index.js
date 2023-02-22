import React from "react";
import "./allcourses.css";
import Heading from "../../atoms/headingText";
import CustomButton from "../../atoms/CustomButton";
// import { Star, Globe, Flag, CreditCard, Activity} from "react-feather";
// import { TbArrowNarrowRight ,TbSearch,} from "react-icons/tb";
import { MdFlag,MdOutlineCreditCardOff ,MdStarBorder ,MdLanguage ,MdSearch} from "react-icons/md";
import { BsStars } from "react-icons/bs";
import CourseCard from "../CourseCard";
import card1Img from "../../../asserts/images/element/card1Img.jpg";
import SubHeading from "../../atoms/SubHeading";
import SmallHeading from "../../atoms/SmallHeading";
const cardArr = [1, 2, 4, 5, 6, 2, 4, 2]; //for dev
// import card1Img from "../../asserts/images/element/card1Img.jpg";

function AllCourses() {
  const tabStyle = {
    backgroundColor: "#2220",
    // borderBottomWidth:'0.2em'
  };
  return (
    <div className="allCourse">
      {/* <div className="allcourseContainer"></div> */}
      <div className="allcourseContainer">
        <div className="courseHeader">
          <Heading styles={{ margin: "0.5em 0", color: "#e4e4e4" }}>
            Learn something new!
          </Heading>
          <div className="searchBar">
            <input type="text" placeholder="Search Course..." />
            <CustomButton
              icon={<MdSearch/>}
              iconPosition={"left"}
              style={{ backgroundColor: "blue", padding: "1em" }}
            >
              Search
            </CustomButton>
          </div>
          <div className="stickyHeader">
            <CustomButton
              icon={<MdLanguage />}
              iconPosition={"left"}
              style={tabStyle}
            >
              Browse All
            </CustomButton>
            <CustomButton
              icon={<MdStarBorder />}
              iconPosition={"left"}
              style={tabStyle}
            >
              Our Picks
            </CustomButton>
            <CustomButton
              icon={<BsStars />}
              iconPosition={"left"}
              style={tabStyle}
            >
              New
            </CustomButton>
            <CustomButton
              icon={<MdFlag />}
              iconPosition={"left"}
              style={tabStyle}
            >
              Early Access
            </CustomButton>
            <CustomButton
              icon={<MdOutlineCreditCardOff />}
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
            return (
              <CourseCard key={item} image={card1Img}>
                <SmallHeading styles={{ color: "white" }}>
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
}

export default AllCourses;
