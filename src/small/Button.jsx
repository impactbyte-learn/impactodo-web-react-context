import React from "react";
import styled from "styled-components";

import Base from "../style/Base";

const StyledButton = styled.button`
  ${Base};
  font-weight: bold;
  padding: 0.5em 1em;
`;

const Button = props => {
  return <StyledButton {...props}>{props.children}</StyledButton>;
};

export default Button;
