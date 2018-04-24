import React from "react";
import * as axios from "axios";
import styled from "styled-components";

import AppTitle from "./small/AppTitle";
import InputText from "./small/InputText";
import Button from "./small/Button";

const API_URL = process.env.REACT_APP_API_URL || `http://localhost:3000`;

class App extends React.Component {
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
      axios
        .post(`${API_URL}/todos`, {
          text: text
        })
        .then(res => {
          this.findAll();
        });
    }
  }

  handleDelete(event) {
    const id = "";
    axios.delete(`${API_URL}/todos/${id}`).then(res => {
      this.findAll();
    });
  }

  render() {
    const todos = this.state.todos;

    return (
      <div className="App">
        <AppTitle>IMPACT TODO</AppTitle>

        <form onSubmit={this.handleSubmit}>
          <InputText
            type="text"
            placeholder="New todo text"
            onChange={this.handleChange}
          />
          <Button type="submit">Submit</Button>
        </form>

        <ul>
          {todos &&
            todos.map(todo => {
              return <li key={todo.id}>{todo.text}</li>;
            })}
        </ul>
      </div>
    );
  }
}

export default App;
