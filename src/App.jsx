import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./page/Home";
import About from "./page/About";
import Register from "./page/Register";
import Login from "./page/Login";

import NavigationBar from "./medium/NavigationBar";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <NavigationBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            {/* when none of the above match, <NoMatch> will be rendered */}
            {/* <Route component={NoMatch} /> */}
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
