import { Button } from "@chakra-ui/react";
import React from "react";

function CustomButton({ buttonName, buttonTitle ,bgColor ,color ,hoverColor}) {
  return <Button pl="30px" hoverColor={hoverColor} color={color} bgColor={bgColor} name={buttonName}>{buttonTitle}</Button>;
}

export default CustomButton;
