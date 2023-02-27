import React from "react";
import "./login.css";
import Heading from "../../components/atoms/HeadingText";
import CustomButton from "../../components/atoms/CustomButton";
import { Progress } from "@chakra-ui/react";
import NormalText from "../../components/atoms/NormalText";
import { MdOutlineFacebook  } from "react-icons/md";

const Login = () => {
  return (
    <div className="loginContainer">
      <div className="loginLeft">
        <Heading className="yo">Join Skillshare for Free</Heading>
        <Progress size="md" colorScheme="green" isIndeterminate />
        <NormalText style={{ fontSize: 20 }}>
          Explore your creativity with thousands of inspiring classes in design,
          illustration, photography, and more.
        </NormalText>
      </div>
      <div className="loginRight">
        <CustomButton
          style={{
            color: "black",
            backgroundColor: "white",
            border: "1px solid black",
            borderRadius: "5px",
          }}
        >
          Continue with FaceBook
        </CustomButton>
        <CustomButton icon={{MdOutlineFacebook}} style={{
            color: "black",
            backgroundColor: "white",
            border: "1px solid black",
            borderRadius: "5px",
          }}>Continue with Google</CustomButton>
        <CustomButton style={{
            color: "black",
            backgroundColor: "white",
            border: "1px solid black",
            borderRadius: "5px",
          }}>Continue with Apple</CustomButton>
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
