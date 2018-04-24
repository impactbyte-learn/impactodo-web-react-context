import React from "react";
import styled from "styled-components";

const StyledAppTitle = styled.h1`
  font-family: sans-serif;
  font-weight: bold;
  color: #800000;
  margin: 0.5em 1em;
`;

const AppTitle = props => {
  return <StyledAppTitle {...props}>{props.children}</StyledAppTitle>;
};

export default AppTitle;
