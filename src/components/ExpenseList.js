import React from "react";
import { connect } from "react-redux";

const ExpenseList = (props) => (
  <div>
    <h3>Expense List</h3>
    <p>Number of expenses: {props.expenses.length}</p>
    <p>Searching for: {props.filters.text}</p>
  </div>
);

// This allows component above to connect to the store.
const mapStateToProps = (state) => {
  return {
    expenses: state.expenses,
    filters: state.filters,
  };
};

export default connect(mapStateToProps)(ExpenseList);
