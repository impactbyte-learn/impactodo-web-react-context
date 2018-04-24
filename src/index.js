import React from "react";
import ReactDOM from "react-dom";

// import { Provider } from 'react-redux';
// import configureStore from 'state/store';
// const store = configureStore();

import registerServiceWorker from "./registerServiceWorker";
import App from "./App";

registerServiceWorker();

const render = Component => {
  return ReactDOM.render(
    // When using Redux:
    // <Provider store={store}>
    //     <Component />
    // </Provider>,
    <Component />,
    document.getElementById("root")
  );
};

render(App);

if (module.hot) {
  module.hot.accept("./App", () => {
    const NextApp = require("./App").default;
    render(NextApp);
  });
}
