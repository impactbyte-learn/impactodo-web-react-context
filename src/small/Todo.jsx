import React from "react";
import styled from "styled-components";
import * as axios from "axios";

const API_URL = process.env.REACT_APP_API_URL || `http://localhost:3000`;

const StyledTodo = styled.li`
  list-style: none;
  padding: 0.5em;
`;

const StyledDeleteButton = styled.span`
  background: transparent;
  color: #800000;
  border: none;
  margin-right: 1em;
  font-weight: bold;
  cursor: pointer;
`;

const Todo = props => {
  async function handleDelete(id) {
    await axios.delete(`${API_URL}/todos/${id}`);
    props.refresh();
  }

  return (
    <StyledTodo {...props}>
      <StyledDeleteButton onClick={() => handleDelete(props.id)}>
        x
      </StyledDeleteButton>
      {props.children}
    </StyledTodo>
  );
};

export default Todo;
