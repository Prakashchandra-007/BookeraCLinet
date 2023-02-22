import { color } from "@chakra-ui/react";
import React, { useState } from "react";
import { Search } from "react-feather";
import {
  TbArrowLeft,
  TbArrowNarrowRight,
  TbChartInfographic,
  TbChartPie,
  TbDownload,
  TbFileDollar,
  TbPaperclip,
} from "react-icons/tb";
import "./sidenavbar.css";

const SideNavBar = ({ style }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const iconSize = "2em";
  const menuItems = [
    {
      text: "Explore",
      icon: <TbChartPie size={iconSize} />,
    },
    {
      text: "Projects",
      icon: <TbChartInfographic size={iconSize} />,
    },
    {
      text: "Skill Paths",
      icon: <TbDownload size={iconSize} />,
    },
    {
      text: "Assesments",
      icon: <TbFileDollar size={iconSize} />,
    },
    {
      text: "Career",
      icon: <TbPaperclip size={iconSize} />,
    },
  ];
  const MenuItemsComponent = ({ name, icon, active }) => {
    return (
      <div
        style={{
          backgroundColor: active && "rgb(0, 21, 40)",
          color: active && "#ffff",
        }}
        className="sideMenuItem"
      >
        {icon}
        <p>{name}</p>
      </div>
    );
  };
  const Closer = () => {
    return (
      <button
        onClick={() => {
          setIsExpanded((ps) => !ps);
        }}
        className="closerBtn"
      >
        {isExpanded ? (
          <TbArrowLeft size={"2em"} />
        ) : (
          <TbArrowNarrowRight size={"2em"} />
        )}
      </button>
    );
  };
  return (
    <div style={{ width: !isExpanded && "3em" }} className="sideNavContainer">
      <Closer />
      {menuItems.map((menu, index) => {
        return (
          <MenuItemsComponent
            key={index}
            active={index == 1}
            name={menu.text}
            icon={menu.icon}
          />
        );
      })}
    </div>
  );
};
export default SideNavBar;
