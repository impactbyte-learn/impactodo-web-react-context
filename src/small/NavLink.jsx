import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledNavLink = styled.a`
  padding: 0.5em;
`;

const NavLink = props => {
  return (
    <StyledNavLink>
      <Link to={props.to}>{props.children}</Link>
    </StyledNavLink>
  );
};

export default NavLink;
