import React from "react";

export const Context = React.createContext();

export class Provider extends React.Component {
  state = {
    text: "default",
    todos: ["one", "two", "three", "four"]
  };

  render() {
    return (
      <Context.Provider value={{ state: this.state }}>
        {this.props.children}
      </Context.Provider>
    );
  }
}
