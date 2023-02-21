import React from "react";
import { StyledHeader, StyledIcon } from "./Styled";

const Header = (props) => {
  return <StyledHeader>{props.text}</StyledHeader>;
};

export default Header;
