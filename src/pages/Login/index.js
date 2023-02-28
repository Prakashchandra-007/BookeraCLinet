import React from "react";
import "./login.css";
import Heading from "../../components/atoms/HeadingText";
import CustomButton from "../../components/atoms/CustomButton";
import { Progress } from "@chakra-ui/react";
import NormalText from "../../components/atoms/NormalText";
import { FcGoogle } from "react-icons/fc";
import { FaApple, FaFacebook } from "react-icons/fa";
import Modal from "../../components/atoms/Modal";
const Login = () => {
  return (
    <Modal>
      <div className="loginContainer">
        <div className="loginLeft">
          <Heading style={{ fontSize: "2em" }}>
            Join Skillshare for Free
          </Heading>
          <br />
          <Progress
            size="md"
            colorScheme="green"
            isIndeterminate
            style={{ fontSize: "0.5rem", paddingBottom: "0.1em" }}
          />
          <br />
          <NormalText style={{ fontSize: "1rem" }}>
            Explore your creativity with thousands of inspiring classes in
            design, illustration, photography, and more.
          </NormalText>
        </div>
        <div className="loginRight">
          <CustomButton
            width={"70%"}
            height={"10%"}
            icon={
              <FaFacebook
                style={{
                  fontSize: "35",
                  alignItems: "center",
                  color: "rgb(24,119,242)",
                  paddingRight: "10px",
                }}
              />
            }
            iconPosition={"left"}
            style={{
              color: "black",
              backgroundColor: "white",
              border: "1px solid black",
              borderRadius: "5px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "1em 0",
              boxShadow: " 0 1px 0px rgba(0,0,0,0.2)",
            }}
          >
            Continue with FaceBook
          </CustomButton>
          <CustomButton
            width={"70%"}
            height={"10%"}
            icon={
              <FcGoogle
                style={{
                  fontSize: "35",
                  alignItems: "center",
                  paddingRight: "10px",
                }}
              />
            }
            iconPosition={"left"}
            style={{
              color: "black",
              backgroundColor: "white",
              border: "1px solid black",
              borderRadius: "5px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "1em 0",
              boxShadow: " 0 1px 0px rgba(0,0,0,0.2)",
            }}
          >
            Continue with Google
          </CustomButton>
          <CustomButton
            width={"70%"}
            height={"10%"}
            icon={
              <FaApple
                style={{
                  fontSize: "35",
                  alignItems: "center",
                  paddingRight: "15px",
                }}
              />
            }
            iconPosition={"left"}
            style={{
              color: "black",
              backgroundColor: "white",
              border: "1px solid black",
              borderRadius: "5px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "1em 0",
              boxShadow: " 0 1px 0px rgba(0,0,0,0.2)",
            }}
          >
            Continue with Apple
          </CustomButton>
          <div className="formSeprator">---------or---------</div>
          <CustomButton
            width={"70%"}
            height={"10%"}
            style={{
              color: "white",
              backgroundColor: "#002333",
              borderRadius: "5px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "1em 0",
            }}
          >
          <a className="signup" href="#">
          Sign Up Using Email
          </a>
          </CustomButton>
          <CustomButton style={{ color: "black", backgroundColor: "white" }}>
            Already a member?
            <a className="signIn" href="#" 
            >
              Sign in
            </a>
          </CustomButton>
        </div>
      </div>
    </Modal>
  );
};

export default Login;
