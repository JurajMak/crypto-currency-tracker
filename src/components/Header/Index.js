import React from "react";
import { StyledHeader } from "./Styled";

const Header = (props) => {
  return <StyledHeader>{props.text}</StyledHeader>;
};

export default Header;
