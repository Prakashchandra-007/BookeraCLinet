import React from "react";
import "./login.css";
import Heading from "../../components/atoms/HeadingText";
import CustomButton from "../../components/atoms/CustomButton";
import { Progress } from "@chakra-ui/react";
import NormalText from "../../components/atoms/NormalText";
import { FcGoogle } from "react-icons/fc";
import { FaApple ,FaFacebook } from "react-icons/fa";

const Login = () => {
  return (
    <div className="loginContainer">
      <div className="loginLeft">
        <Heading style={{ fontSize: 100 }}>Join Skillshare for Free</Heading>
        <br />
        <Progress
          size="md"
          colorScheme="green"
          isIndeterminate
          style={{ fontSize: 100, paddingBottom: "10px" }}
        />
        <br />
        <NormalText style={{ fontSize: 15 }}>
          Explore your creativity with thousands of inspiring classes in design,
          illustration, photography, and more.
        </NormalText>
      </div>
      <div className="loginRight">
        <CustomButton
        width={230}
          height={50}
          icon={
            <FaFacebook
              style={{
                fontSize: "35",
                alignItems: "center",
                color:"rgb(24,119,242)",
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
          }}

        >
          Continue with FaceBook
        </CustomButton>
        <CustomButton
          width={230}
          height={50}
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
          }}
        >
          Continue with Google
        </CustomButton>
        <CustomButton
           width={230}
          height={50}
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
          }}
        >
          Continue with Apple
        </CustomButton>
        <p>or</p>
        <CustomButton>Sign Up Using Email</CustomButton>
        <NormalText>
          Already a member?<CustomButton>Sign In</CustomButton>
        </NormalText>
      </div>
    </div>
  );
};

export default Login;
