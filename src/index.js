import React from "react";
import ReactDOM from "react-dom";

import App from "./App.jsx";
import registerServiceWorker from "./registerServiceWorker";

// Wrap the rendering in a function:
ReactDOM.render(<App />, document.getElementById("root"));

// Do this once
registerServiceWorker();
