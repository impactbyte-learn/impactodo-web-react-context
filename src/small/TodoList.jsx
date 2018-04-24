import React from "react";
import styled from "styled-components";

const StyledTodoList = styled.ul`
  font-family: sans-serif;
  color: #800000;
  padding-left: 0;
  max-width: 300px;
`;

const TodoList = props => {
  return <StyledTodoList {...props}>{props.children}</StyledTodoList>;
};

export default TodoList;
