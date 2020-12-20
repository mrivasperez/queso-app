import React from "react";
import { connect } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import selectExpenses from "../selectors/expenses";

const ExpenseList = (props) => (
  <div className="content-container">
    <div className="list-header">
      <div className="show-for-mobile">
        <h4>Expenses</h4>
      </div>
      <div className="show-for-desktop">
        <h4>Expense</h4>
      </div>
      <div className="show-for-desktop">
        <h4>Amount</h4>
      </div>
    </div>
    <div className="list-body">
      {props.expenses.length === 0 ? (
        <div className=" list-item list-item--message">
          <span>No Expenses</span>
        </div>
      ) : (
        props.expenses.map((expense) => (
          <ExpenseListItem key={expense.id} {...expense} />
        ))
      )}

      {}
    </div>
  </div>
);

// This allows component above to connect to the store.
const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters),
  };
};

export default connect(mapStateToProps)(ExpenseList);
