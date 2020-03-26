import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import { App } from "./react";
import { store, history } from "./redux";
import "bootstrap/dist/css/bootstrap.min.css";
import ScrollToTop from "react-router-scroll-top";

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <ScrollToTop>
        <App />
      </ScrollToTop>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);
