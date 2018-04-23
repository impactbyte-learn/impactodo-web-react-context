import React, { Component } from "react";

import * as axios from "axios";

const API_URL = process.env.REACT_APP_API_URL || `http://localhost:3000`;

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

  componentDidMount() {
    this.findAll();
  }

  findAll() {
    axios.get(`${API_URL}/todos`).then(res => {
      this.setState({ todos: res.data });
    });
  }

  handleChange(event) {
    this.setState({ text: event.target.value });
  }

  handleSubmit(event) {
    axios
      .post(`${API_URL}/todos`, {
        text: this.state.text
      })
      .then(res => {
        this.findAll();
      });
    event.preventDefault();
  }

  render() {
    const todos = this.state.todos;

    return (
      <div className="App">
        <h1>IMPACT TODO</h1>

        <ul>
          {todos &&
            todos.map(todo => {
              return <li key={todo.id}>{todo.text}</li>;
            })}
        </ul>

        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="New todo text"
            value={this.state.text}
            onChange={this.handleChange}
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default App;
