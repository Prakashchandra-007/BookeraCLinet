import React, { useState } from "react";
import "./login.css";
import Heading from "../../components/atoms/HeadingText";
import CustomButton from "../../components/atoms/CustomButton";
import { Checkbox, Progress } from "@chakra-ui/react";
import NormalText from "../../components/atoms/NormalText";
import { FcGoogle } from "react-icons/fc";
import { FaApple, FaFacebook } from "react-icons/fa";
import Modal from "../../components/atoms/Modal";
const Login = () => {
  const [showSignupForm, setShowSignupForm] = useState(false);
  const [screenState, setScreenState] = useState("signup");
  return (
    <Modal>
      <div className="loginContainer">
        <input type="checkbox" id="check" />
        <div className="signupForm">
          {screenState === "signup" && (
            <div className="loginLeft">
              <Heading style={{ fontSize: "2em" }}>
                Join Bookera for Free
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
          )}
          <div className="loginRight">
            {screenState === "signup" && (
              <>
                {" "}
                {!showSignupForm ? (
                  <>
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
                  </>
                ) : (
                  <form className="signUparea">
                    <input name="name" placeholder="Name"></input>
                    <input name="email" placeholder="Email"></input>
                    <input
                      name="password"
                      placeholder="Password"
                      type={"password"}
                    ></input>

                    <CustomButton
                      callback={() => setShowSignupForm((ps) => !ps)}
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
                      Submit
                    </CustomButton>
                  </form>
                )}
              </>
            )}
            {!showSignupForm && screenState === "signup" && (
              <CustomButton
                callback={() => setShowSignupForm((ps) => !ps)}
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
                  <lable for="check">Sign Up Using Email</lable>
                </a>
              </CustomButton>
            )}
            {screenState === "login" && (
              <form className="signUparea">
                <input name="email" placeholder="Email"></input>
                <input
                  name="password"
                  placeholder="Password"
                  type={"password"}
                ></input>

                <CustomButton
                  callback={() => setShowSignupForm((ps) => !ps)}
                  width={"70%"}
                  height={"20%"}
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
                  Login
                </CustomButton>
              </form>
            )}
            <CustomButton
              callback={() => {
                {
                  screenState === "login"
                    ? setScreenState("signup")
                    : setScreenState("login");
                }
              }}
              style={{ color: "black", backgroundColor: "white" }}
            >
              {screenState === "login"
                ? "Dont have account?"
                : "Already a member?"}
              <a className="signIn" href="#">
                <lable for="check">
                  {screenState === "login" ? "Sign up" : "Sign in"}
                </lable>
              </a>
            </CustomButton>
          </div>
          {screenState === "login" && (
            <div className="loginLeft">
              <Heading style={{ fontSize: "2em" }}>Boost with Bookera</Heading>
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
          )}
        </div>

        {/* SingIn form Seprator */}

        {/* <div className="loginForm">
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
            <form action="#">
              <input type="text" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <Checkbox>Keep me signed in until I sign out</Checkbox>
            </form>
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
              <a className="signIn" href="#">
                <lable for="check">Sign In</lable>
              </a>
            </CustomButton>
            <a className="signIn" href="#">
              Forgot password?
            </a>
            <CustomButton style={{ color: "black", backgroundColor: "white" }}>
              Not a member yet?
              <a className="signIn" href="#">
                <lable for="check">Sign up</lable>
              </a>
            </CustomButton>
          </div>
        </div> */}
      </div>
    </Modal>
  );
};

export default Login;
