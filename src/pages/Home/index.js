import React from "react";
import "./home.css";
import CustomButton from "../../components/atoms/CustomButton";
import img from "./img/logos.jpg";
// import sideImg from "./sideImg/sideimg.jpg";
import Heading from "../../components/atoms/headingText";
import SubHeading from "../../components/atoms/SubHeading";
import SmallHeading from "../../components/atoms/SmallHeading";
import MedsizeHeading from "../../components/atoms/MedsizeHeading";
import opncls from "./coursesectionImg/opncls.jpg";
import rightside from "./courseSecRight/rightside.jpg";
import codeImg from "../../asserts/images/svgs/codeImg.svg";
import circleImg from "../../asserts/images/svgs/circle.svg";
import doted from "../../asserts/images/svgs/dotedImg.svg";
import sideImg from "../../asserts/images/svgs/heroSecImg.svg";
import { Flex } from "@chakra-ui/react";
import CourseCard from "../../components/molecules/CourseCard";
import card1Img from "../../asserts/images/element/card1Img.jpg";
import card2Img from "../../asserts/images/element/card2Img.jpg";
import card3Img from "../../asserts/images/element/card3Img.jpg";
import { ArrowRight } from "react-feather";
const Home = () => {
  return (
    <div className="homeContainer">
      <div className="heroSection">
        <div
          className="heroSectionleft"
          style={{ minWidth: "200", maxHeight: "200" }}
        >
          <Heading styles={{ color: "black" }}>
            Bookera Accelerates The Knowledge
          </Heading>
          <SubHeading
            styles={{
              marginTop: 30,
              marginBottom: 30,
              minWidth: "200",
              maxHeight: "200",
            }}
          >
            Explore over 500 courses on: Finance | Banking | Business Case
            Studies | Business Development
          </SubHeading>

          <CustomButton width={150} height={40}>
            Start Free Trail
          </CustomButton>
          <SmallHeading>
            Join 1.7 Million students & working professionals in companies like
          </SmallHeading>
          <img src={img} alt="parterlogoImg" className="parterlogoImg" />
        </div>
        <div className="heroSectionRight">
          <img src={sideImg} alt="HeroImg" className="heroImg" />
        </div>
      </div>

      {/* COURSE SECTION */}

      <div className="courseSection">
        <div className="courseSection_left">
          <ul
            style={{
              color: "rgb(126,128,249)",
              marginTop: 30,
              paddingLeft: 20,
              paddingBottom: 20,
            }}
          >
            <li>INTERACTIVE</li>
          </ul>
          <MedsizeHeading styles={{ color: " white" }}>
            LIBRARY ON THE GO...
          </MedsizeHeading>
          <SubHeading
            styles={{
              color: "white",
              paddingleft: "50%",
              marginTop: 30,
              marginBottom: 30,
            }}
          >
            You don’t get better at swimming by watching others. Coding is no
            different. Practice as you learn with live code environments inside
            your browser.
          </SubHeading>
          <Flex>
            <div>
              <img
                src={opncls}
                style={{ width: "10%", height: "20%" }}
                alt="</>"
                className="opnclsImg"
              />
              <SmallHeading styles={{ color: "white" }}>
                Hands-on Projects: Build Real World Applications
              </SmallHeading>
            </div>
            <div>
              <img
                src={opncls}
                style={{ width: "10%", height: "20%" }}
                alt="</>"
                className="opnclsImg"
              />
              <SmallHeading styles={{ color: "white" }}>
                Hands-on Projects: Build Real World Applications
              </SmallHeading>
            </div>
          </Flex>
        </div>

        <div
          className="courseSection_right"
          style={{ minWidth: "200", maxHeight: "200" }}
        >
          <img
            src={rightside}
            alt="rightsideCourseSection"
            className="rightsidecourseimg"
            style={{ minWidth: "200", maxHeight: "200" }}
          />
        </div>
        {/* downsection of course section */}
      </div>
      <div className="courseSection">
        <div
          className="courseSection_left"
          style={{ minWidth: "200", maxHeight: "200" }}
        >
          <img
            src={rightside}
            alt="rightsideCourseSection"
            className="rightsidecourseimg"
          />
        </div>
        <div
          className="courseSection_right"
          style={{ minWidth: "200", maxHeight: "200" }}
        >
          <ul
            style={{
              color: "rgb(126,128,249)",
              marginTop: 30,
              paddingLeft: 20,
              paddingBottom: 20,
              minWidth: "200",
              maxHeight: "200",
            }}
          >
            <li>2X FASTER LEARNING</li>
          </ul>
          <MedsizeHeading styles={{ color: " white" }}>
            2x FASTER LEARNING
          </MedsizeHeading>
          <SubHeading
            styles={{
              color: "white",
              paddingleft: "50%",
              marginTop: 30,
              marginBottom: 30,
              minWidth: "100",
              maxHeight: "100",
            }}
          >
            Reading is faster than watching: The average tutorial is spoken at
            150 words per minute. You can read at 250. That’s why our courses
            are laid out as rich text and an interactive experience so you learn
            more, learn faster, and learn exactly what you need.
          </SubHeading>
          <Flex>
            <div>
              <img
                src={opncls}
                style={{ width: "10%", height: "20%" }}
                alt="</>"
                className="opnclsImg"
              />
              <SmallHeading styles={{ color: "white" }}>
                Hands-on Projects: Build Real World Applications
              </SmallHeading>
            </div>
            <div>
              <img
                src={opncls}
                style={{ width: "10%", height: "20%" }}
                alt="</>"
                className="opnclsImg"
              />
              <SmallHeading styles={{ color: "white" }}>
                Hands-on Projects: Build Real World Applications
              </SmallHeading>
            </div>
          </Flex>
        </div>
      </div>
      <div className="getStatedSection">
        <SubHeading
          styles={{
            color: "white",
            paddingleft: "50%",
            marginTop: 30,
            marginBottom: 30,
          }}
        >
          Supercharge Your Development Career
        </SubHeading>
        <CustomButton width={150} height={40}>
          Start Free Trail
        </CustomButton>
        <img src={doted} alt="dotedImg" className="dotedImg" />
      </div>
      <div className="courseViewSection">
        <SubHeading
          styles={{
            color: "white",
            paddingleft: "50%",
            marginTop: 30,
            marginBottom: 30,
          }}
        >
          Stop Scrolling. Start Coding.Supercharge Your Development Career
        </SubHeading>
        <div className="courseContainer">
          <CourseCard style={{ color: "white" }} image={card1Img}>
            <SmallHeading styles={{ color: "white" }}>Educative</SmallHeading>
            <SubHeading styles={{ color: "white", textAlign: "left" }}>
              Grokking Coding Interview Patterns in Python
            </SubHeading>
          </CourseCard>
          <CourseCard style={{ color: "white" }} image={card2Img}>
            <SmallHeading styles={{ color: "white" }}>Educative</SmallHeading>
            <SubHeading styles={{ color: "white", textAlign: "left" }}>
              Grokking Modern System Design Interview for Engineers & Managers
            </SubHeading>
          </CourseCard>
          <CourseCard image={card3Img}>
            <SmallHeading styles={{ color: "white" }}>Educative</SmallHeading>
            <SubHeading styles={{ color: "white", textAlign: "left" }}>
              Grokking the Machine Learning Interview
            </SubHeading>
          </CourseCard>
        </div>

        <CustomButton width={150} height={60}>
          Start Your Free Trail
        </CustomButton>
      </div>
      <div className="feedBackSection">
        <img src={circleImg} alt="circleImg" className="circleImg" />
        <div
          style={{
            width: "80%",
            height: "50vh",
            borderRadius: 12,
            borderWidth: "1px",
            display: "flex",
            borderColor: "#9cc4eb",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <img
            src={doted}
            alt="dotedImg"
            style={{ position: "absolute", width: "70%", height: "100" }}
          />
          <div className="feedBackSectionleft">
            <SubHeading
              styles={{
                color: "white",
                paddingleft: "50%",
                marginTop: 30,
                marginBottom: 30,
              }}
            >
              Join more than 1.7 Million Developers
            </SubHeading>

            <CustomButton width={150} height={40}>
              Sign up for Free
            </CustomButton>
          </div>
          <div className="feedBackSectionRight"></div>
        </div>
        <img alt="codeImg" src={codeImg} className="feedBackImg" />
      </div>
    </div>
  );
};

export default Home;
