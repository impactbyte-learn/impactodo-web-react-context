import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./page/Home";
import About from "./page/About";

import NavigationBar from "./medium/NavigationBar";

class App extends React.Component {
  render() {
    return (
      <div>
        <NavigationBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          {/* <Route path="/register" component={Register} /> */}
          {/* <Route path="/login" component={Login} /> */}
          {/* when none of the above match, <NoMatch> will be rendered */}
          {/* <Route component={NoMatch} /> */}
        </Switch>
      </div>
    );
  }
}

export default App;
