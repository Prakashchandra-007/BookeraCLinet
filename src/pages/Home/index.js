import React from "react";
import "./home.css";
import { Box, Button, Image, Stack, Wrap, WrapItem } from "@chakra-ui/react";
import CustomButton from "../../components/atoms/CustomButton";
import img from "./img/logos.jpg";
import sideImg from "./sideImg/sideimg.jpg";
const Home = () => {
  return (
    <div className="homeContainer">
      <div className="heroSection">
        {/* <Wrap>
          <WrapItem>
            <Stack>
              <Box bgColor={"red"} w="60%" ml={"10%"}>
                <h2 className="edu_1">
                  Educative Accelerates Developer Productivity
                </h2>
                <h2 className="edu_low">
                  Explore over 500+ courses on: Programming | Cloud Computing |
                  Data Science | Machine Learning
                </h2>
                <CustomButton
                  // style={{paddingLeft:"20%"}}
                  // sx={{pt:"10%"}}
                  className="button"
                  hoverColor={"lightblue"}
                  color={"white"}
                  bgColor={"blue"}
                  buttonTitle={"Start Your Free Trial"}
                />
                <h4 className="edu_low2">
                  Join 1.7 Million developers working in companies like
                </h4>
                <img src={img} alt="logo" />
              </Box>
            </Stack>
           
          </WrapItem>
          <WrapItem  w={"30%"} h={500}>
            <Box>
              <Image src={sideImg} alt="heroImg" />
            </Box>
          </WrapItem>
        </Wrap>
      </div>
      <div className="courseSection">
        <Wrap>
          <WrapItem>
            <Stack>
              <Box w={"60%"}>
                <ul>
                  <li className="li">INTERACTIVE</li>
                </ul>
              </Box>
            </Stack>
          </WrapItem>
        </Wrap> */}
      </div>
      <div className="courseSection"></div>
      <div className="feedBackSection"></div>
    </div>
  );
};

export default Home;
