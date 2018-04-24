import React from "react";
import styled from "styled-components";

import NavLink from "../small/NavLink";

const StyledNavigationBar = styled.div`
  font-weight: bold;
  color: #800000;
  margin: 0.5em 1em;
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
