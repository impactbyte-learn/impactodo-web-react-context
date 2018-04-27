import React from "react";
import { hot } from "react-hot-loader";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Provider } from "./container/Context";

import Home from "./page/Home";
import About from "./page/About";
import Register from "./page/Register";
import Login from "./page/Login";
import Experiment from "./page/Experiment";
import Experiment2 from "./page/Experiment2";

import "bootstrap/dist/css/bootstrap.min.css";

const App = () => (
  <Provider>
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/experiment" component={Experiment} />
        <Route path="/experiment2" component={Experiment2} />
      </Switch>
    </Router>
  </Provider>
);

export default hot(module)(App);
