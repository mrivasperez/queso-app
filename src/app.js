import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "normalize.css/normalize.css";
import configureStore from "./store/configureStore";
import "./styles/styles.scss";
import AppRouter from "./routers/AppRouter";
import { addExpense, removeExpense, editExpense } from "./actions/expenses";
import {
  setTextFilter,
  sortByAmount,
  sortByDate,
  setStartDate,
  setEndDate,
} from "./actions/filters";

import getVisibleExpenses from "./selectors/expenses";
import "./firebase/firebase";

const store = configureStore();

console.log(store.getState());

// addExpense -> water bill
store.dispatch(
  addExpense({
    description: "Water Bill",
    note: "1000 Water Bill",
    amount: 350,
    createdAt: 2000,
  })
);

// addExpense -> Gas bill
store.dispatch(
  addExpense({
    description: "Gas Bill",
    note: "1000 Gas Bill",
    amount: 250,
    createdAt: 1000,
  })
);

store.dispatch(
  addExpense({
    description: "Rent",
    note: "December Rent",
    amount: 1250,
    createdAt: 1000,
  })
);

// getVisibleExpenses function -> print visible ones to the screen
const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));
