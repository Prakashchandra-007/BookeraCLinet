import React from "react";
import "./home.css";
import CustomButton from "../../components/atoms/CustomButton";
import img from "./img/logos.jpg";
import sideImg from "./sideImg/sideimg.jpg";
import Heading from "../../components/atoms/headingText";
import SubHeading from "../../components/atoms/SubHeading";

const Home = () => {
  return (
    <div className="homeContainer">
      <div className="heroSection">
        <div className="heroSectionleft">
          <Heading styles={{ color: "black" }}>
            Educative Accelerates Developer Productivity
          </Heading>
          <SubHeading styles={{ marginTop: 30, marginBottom: 30 }}>
            Explore over 500 courses on: Programming | Cloud Computing | Data
            Science | Machine Learning
          </SubHeading>

          <CustomButton width={150} height={40}>
            Start Free Trail
          </CustomButton>
        </div>
        <div className="heroSectionRight">
          <img src={sideImg} alt="HeroImg" className="heroImg" />
        </div>
      </div>
      <div className="courseSection"></div>
      <div className="feedBackSection">
        <div className="feedBackSectionleft"></div>
        <div className="feedBackSectionRight"></div>
      </div>
    </div>
  );
};

export default Home;
