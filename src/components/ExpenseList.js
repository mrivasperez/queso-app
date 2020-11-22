import React from "react";
import { connect } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";

const ExpenseList = (props) => (
  <div>
    <h3>Expense List</h3>
    {props.expenses.map((expense) => (
      <ExpenseListItem
        key={expense.id}
        description={expense.description}
        amount={expense.amount}
        createdAt={expense.createdAt}
      />
    ))}
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
