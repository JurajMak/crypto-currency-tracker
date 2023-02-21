import styled from "styled-components";

export const StyledHeader = styled.h2`
  text-align: center;
  color: white;
  margin-top: 50px;
  font-weight: 400;

  ::before {
    color: #551a8b;
    font-size: 35px;
    content: "\f51e";
    font: var(--fa-font-solid);
    margin-right: 10px;
  }
`;
