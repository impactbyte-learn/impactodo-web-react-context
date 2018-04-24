import React from "react";
import styled from "styled-components";

const StyledNavLink = styled.li`
  padding: 0.5em;
`;

const NavLink = props => {
  return <StyledNavLink {...props}>{props.children}</StyledNavLink>;
};

export default NavLink;
