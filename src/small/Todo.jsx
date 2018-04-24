import React from "react";
import styled from "styled-components";

const StyledTodo = styled.li`
  list-style: none;
  border-bottom: 2px solid #ccc;
  padding: 0.5em;
`;

const Todo = props => {
  return <StyledTodo {...props}>{props.children}</StyledTodo>;
};

export default Todo;
