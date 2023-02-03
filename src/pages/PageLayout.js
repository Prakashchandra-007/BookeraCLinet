import React from "react";
import { Outlet, Link } from "react-router-dom";
// import { Header } from "../components/molecules";
const PageLayout = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          backgroundColor: "red",
          width: "100%",
        }}
        className="container"
      >
        <h1>loGO</h1>
        <nav
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <h3>
            <Link to="/">Home</Link>
          </h3>
          <h3>
            <Link to="/profile">Profile</Link>
          </h3>
          <h3>
            <Link to="/login">Login</Link>
          </h3>
        </nav>
      </div>
      <Outlet />
    </>
  );
};

export default PageLayout;
