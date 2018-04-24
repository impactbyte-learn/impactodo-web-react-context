import React from "react";
import styled from "styled-components";

import Base from "../style/Base";

const StyledInputText = styled.input`
  ${Base};
  padding: 0.5em;
  margin: 0.5em;
`;

const InputText = props => {
  return <StyledInputText {...props}>{props.children}</StyledInputText>;
};

export default InputText;
