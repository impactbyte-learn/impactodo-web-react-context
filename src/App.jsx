import React, { Component } from "react";
import * as axios from "axios";
import styled from "styled-components";

const API_URL = process.env.REACT_APP_API_URL || `http://localhost:3000`;

const base = `
  border-radius: 3px;
  background: transparent;
  color: #800000;
  border: 2px solid #800000;
`;

const InputText = styled.input`
  ${base};
  padding: 0.25em;
  margin: 0 1em;
`;

const Button = styled.button`
  ${base};
  padding: 0.25em 1em;
`;

class App extends Component {
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
        <h1>IMPACT TODO</h1>

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
