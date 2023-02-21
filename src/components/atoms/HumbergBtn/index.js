import React, { useState } from "react";
import { List, X } from "react-feather";
import { TbAlignRight } from "react-icons/tb";
import { Link } from "react-router-dom";
import Heading from "../headingText";
import "./humberg.css";

function HumbergBtn() {
  const [dropdown, setDropdown] = useState(false);
  return (
    <div className="humbergbtnContainer">
      <button
        onClick={() => {
          setDropdown((ps) => !ps);
        }}
        style={{}}
      >
        {dropdown ? <X color="white" /> : <TbAlignRight color="white" />}
      </button>
      {dropdown && (
        <div className="dropdownMenu">
          <button
            onClick={() => {
              setDropdown((ps) => !ps);
            }}
            style={{ position: "absolute", top: "10", right: "1.5em" }}
          >
            <X color="white" />
          </button>
          <ul>
            <li>
              <Link to="/">
                <Heading
                  onClick={() => {
                    setDropdown((ps) => !ps);
                  }}
                  styles={{ color: "white" }}
                >
                  Home
                </Heading>
              </Link>
            </li>
            <li>
              <Link to="/profile">
                <Heading styles={{ color: "white" }}>Profile</Heading>
              </Link>
            </li>
            <li>
              <Link to="/allcourses">
                <Heading styles={{ color: "white" }}>All Course</Heading>
              </Link>
            </li>
            <li>
              <Link to="/login">
                <Heading styles={{ color: "white" }}>Login</Heading>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default HumbergBtn;
