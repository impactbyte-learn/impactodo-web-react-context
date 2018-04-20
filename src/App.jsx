import React, { Component } from "react";

import * as axios from "axios";

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
    axios.get(`http://localhost:3000/todos`).then(res => {
      this.setState({ todos: res.data });
    });
  }

  handleChange(event) {
    this.setState({ text: event.target.value });
  }

  handleSubmit(event) {
    console.log("TODO TEXT:", this.state.text);
    axios
      .post(`http://localhost:3000/todos`, {
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
