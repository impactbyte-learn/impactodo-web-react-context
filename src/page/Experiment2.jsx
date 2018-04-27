import React from "react";

import Page from "../container/Page";

import { Context } from "../container/Context";

class Experiment2 extends React.Component {
  render() {
    return (
      <Page title="Experiment 2">
        <Context.Consumer>
          {context => (
            <React.Fragment>
              <div>
                <h4>Text: {context.state.text}</h4>
                <h4>Todos:</h4>
                <ul>
                  {context.state.todos.map((todo, index) => {
                    return <li key={index}>{todo}</li>;
                  })}
                </ul>
              </div>
            </React.Fragment>
          )}
        </Context.Consumer>
      </Page>
    );
  }
}

export default Experiment2;
