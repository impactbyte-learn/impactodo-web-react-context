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

const Todo = ({ children, id, bookmark, refresh }) => {
  async function handleDelete(id) {
    await axios.delete(`${API_URL}/todos/${id}`);
    refresh();
  }

  return (
    <StyledTodo>
      <StyledDeleteButton onClick={() => handleDelete(id)}>
        x
      </StyledDeleteButton>
      {children}
    </StyledTodo>
  );
};

export default Todo;
