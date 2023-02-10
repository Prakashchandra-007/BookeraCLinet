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
import dotedImg from "../../asserts/images/dotedImg.png";
import rightside from "./courseSecRight/rightside.jpg";
import codeImg from "../../asserts/images/svgs/codeImg.svg";
import circleImg from "../../asserts/images/svgs/circle.svg";
import doted from "../../asserts/images/svgs/dotedImg.svg";
import sideImg from "../../asserts/images/svgs/heroSecImg.svg";
import { Flex } from "@chakra-ui/react";

const Home = () => {
  return (
    <div className="homeContainer">
      <div className="heroSection">
        <div className="heroSectionleft">
          <Heading styles={{ color: "black", minWidth: 700 }}>
            Educative Accelerates Developer Productivity
          </Heading>
          <SubHeading styles={{ marginTop: 30, marginBottom: 30 }}>
            Explore over 500 courses on: Programming | Cloud Computing | Data
            Science | Machine Learning
          </SubHeading>

          <CustomButton width={150} height={40}>
            Start Free Trail
          </CustomButton>
          <SmallHeading>
            Join 1.7 Million developers working in companies like
          </SmallHeading>
          <img src={img} alt="logoImg" className="logoImg" />
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
            Hands-on coding environments
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

        <div className="courseSection_right">
          <img
            src={rightside}
            alt="rightsideCourseSection"
            className="rightsidecourseimg"
          />
        </div>
        {/* downsection of course section */}
        {/* <div className="courseSection_left">
          <img
            src={rightside}
            alt="rightsideCourseSection"
            className="rightsidecourseimg"
          />
        </div> */}

        {/* <div className="courseSection_left">
          <ul
            style={{
              color: "rgb(126,128,249)",
              marginTop: 30,
              paddingLeft: 20,
              paddingBottom: 20,
            }}
          >
            <li>2x FASTER LEARNING</li>
          </ul>
          <MedsizeHeading styles={{ color: " white" }}>
            2x Faster Learning
          </MedsizeHeading>
          <SubHeading
            styles={{
              color: "black",
              paddingleft: "50%",
              marginTop: 30,
              marginBottom: 30,
            }}
          >
            Reading is faster than watching: The average tutorial is spoken at
            150 words per minute. You can read at 250. That’s why our courses
            are laid out as rich text and an interactive experience so you learn
            more, learn faster, and learn exactly what you need.
          </SubHeading>
          <img src={opncls} alt="</>" className="opnclsImg" />
          <SmallHeading styles={{ color: "white" }}>
            Assessments: Measure Your Skill Score
          </SmallHeading>
          <img src={opncls} alt="</>" className="opnclsImg" />
          <SmallHeading styles={{ color: "white" }}>
            Personalized Paths
          </SmallHeading>
        </div> */}
      </div>
      <div className="courseSection">
        <div className="courseSection_left">
          <img
            src={rightside}
            alt="rightsideCourseSection"
            className="rightsidecourseimg"
          />
        </div>
        <div className="courseSection_right">
          <ul
            style={{
              color: "rgb(126,128,249)",
              marginTop: 30,
              paddingLeft: 20,
              paddingBottom: 20,
            }}
          >
            <li>2x FASTER LEARNING</li>
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
      <div className="feedBackSection">
        <img src={circleImg} alt="circleImg" className="circleImg" />
        <div
          style={{
            width: "80%",
            height: "50vh",
            borderRadius: 12,
            borderWidth: "1px",
            display: "flex",
            borderColor: "#0e3458",
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
              Start Free Trail
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
