import React from "react";
import styled from "styled-components";

import NavLink from "../small/NavLink";

const StyledNavigationBar = styled.div`
  font-weight: bold;
  color: #800000;
  padding-bottom: 0.5em;
  margin: 0.5em 1em;
  border-bottom: 2px solid #800000;
`;

const NavigationBar = props => {
  return (
    <StyledNavigationBar {...props}>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/login">Login</NavLink>
    </StyledNavigationBar>
  );
};

export default NavigationBar;
