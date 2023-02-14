import React from "react";
import { Outlet, Link } from "react-router-dom";
import CustomButton from "../components/atoms/CustomButton";
import Footer from "../components/molecules/Footer";
import Header from "../components/molecules/header";
// import { Header } from "../components/molecules";
const PageLayout = () => {
  return (
    <>
      <Header>
        <h1 className="logo">
          B<span style={{ color: "#6972f0" }}>OO</span>KERA_
        </h1>
        <nav className="menuBar">
          <h3 className="menuItem">
            <Link to="/">Home</Link>
          </h3>
          <h3 className="menuItem">
            <Link to="/profile">Profile</Link>
          </h3>
          <h3 className="menuItem">
            <Link to="/allcourses">All Courses</Link>
          </h3>
          <h3 className="menuItem">
            <Link to="/login">Login</Link>
          </h3>
          <CustomButton
            style={{ paddingLeft: "0.5em", paddingRight: "0.5em" }}
            // height={40}
          >
            <h3>
              <Link to="/profile"> Join for free</Link>
            </h3>
          </CustomButton>
        </nav>
      </Header>
      <Outlet />
      <Footer />
    </>
  );
};

export default PageLayout;
