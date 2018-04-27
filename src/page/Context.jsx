import React from "react";

import Page from "../container/Page";

const AppContext = React.createContext();

class AppProvider extends React.Component {
  state = {
    name: "Gigas",
    age: 10,
    cool: true
  };

  render() {
    return (
      <AppContext.Provider value={{ state: this.state }}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

class Inside extends React.Component {
  render() {
    return (
      <div className="inside">
        <AppContext.Consumer>
          {context => (
            <React.Fragment>
              <div>
                Hello, I am {context.state.name}, {context.state.age} years old.
              </div>
            </React.Fragment>
          )}
        </AppContext.Consumer>
      </div>
    );
  }
}

class Outside extends React.Component {
  render() {
    return (
      <div className="outside">
        <Inside />
      </div>
    );
  }
}

class ContextExample extends React.Component {
  render() {
    return (
      <Page title="Context">
        <AppProvider>
          <h1>Context Example</h1>
          <Outside />
        </AppProvider>
      </Page>
    );
  }
}

export default ContextExample;
