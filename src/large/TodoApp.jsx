import React from "react";
import * as axios from "axios";

import InputText from "../small/InputText";
import Button from "../small/Button";
import TodoList from "../small/TodoList";
import Todo from "../small/Todo";

const API_URL = process.env.REACT_APP_API_URL || `http://localhost:3000`;

class TodoApp extends React.Component {
  state = {
    text: "",
    todos: []
  };

  constructor() {
    super();
    this.findAll = this.findAll.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    this.findAll();
  }

  async findAll() {
    axios.get(`${API_URL}/todos`).then(res => {
      this.setState({ todos: res.data });
    });
  }

  async handleChange(event) {
    const text = await event.target.value;
    if (text !== "") this.setState({ text: text });
  }

  async handleSubmit(event) {
    event.preventDefault();
    const text = await this.state.text;
    if (text !== "") {
      await axios
        .post(`${API_URL}/todos`, {
          text: text
        })
        .then(res => {
          this.findAll();
        });
      this.setState({ text: "" });
    }
  }

  render() {
    const todos = this.state.todos;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <InputText
            type="text"
            placeholder="What's on your mind?"
            onChange={this.handleChange}
            value={this.state.text}
          />
          <Button type="submit">Submit</Button>
        </form>

        <TodoList>
          {todos &&
            todos.map(todo => {
              return (
                <Todo key={todo.id} id={todo.id} refresh={this.findAll}>
                  {todo.text}
                </Todo>
              );
            })}
        </TodoList>
      </div>
    );
  }
}

export default TodoApp;
