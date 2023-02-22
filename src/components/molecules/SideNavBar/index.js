import { color } from "@chakra-ui/react";
import React, { useState } from "react";
import { Search } from "react-feather";
import "./sidenavbar.css";

const SideNavBar = ({ style }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const menuItems = [
{
    text: "Home",
    // icon: ;
}
{
    text: "Home",
    // icon: ;
}
{
    text: "Home",
    // icon: ;
}
{
    text: "Home",
    // icon: ;
}
{
    text: "Home",
    // icon: ;
}
  ];

  return (
    <div
      className={
        isExpanded
          ? "side-nav-container"
          : "side-nav-container side-nav-container-NX"
      }
    >
      <div className="nav-upper">
        <div className="nav-heading">
        {isExpanded && (
          <div className="nav-brand">
            <h1 style={{ color: "white" }}>
              SideBar </h1></div>
              )}
              <button
                className={
                  isExpanded
                    ? "hamburger hamburger-in"
                    : "hamburger hamburger-out"
                }
                onClick={() => setIsExpanded(!isExpanded)}
              >
                <span></span>
                <span></span>
              </button>
        </div>
        <div className="menu">{menuItems.map(() =>)}</div>
      </div>
  );
};

export default SideNavBar;
