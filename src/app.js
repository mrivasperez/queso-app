import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "normalize.css/normalize.css";
import configureStore from "./store/configureStore";
import "./styles/styles.scss";
import AppRouter, { history } from "./routers/AppRouter";
import { startSetExpenses } from "./actions/expenses";
import { login, logout } from "./actions/auth";

import { firebase } from "./firebase/firebase";

const store = configureStore();

// getVisibleExpenses function -> print visible ones to the screen
const state = store.getState();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById("app"));
    hasRendered = true;
  }
};

// loading until setexpenses have started
ReactDOM.render(<h1>Loading...</h1>, document.getElementById("app"));

// check if user is logged in or out
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(login(user.uid));
    store.dispatch(startSetExpenses()).then(() => {
      renderApp();
      if (history.location.pathname === "/") {
        history.push("/dashboard");
      }
    });
  } else {
    store.dispatch(logout());
    renderApp();
    history.push("/");
  }
});
