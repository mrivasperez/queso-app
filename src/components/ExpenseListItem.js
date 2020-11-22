// Export stateless functional component
// Description, amount, createdAt value.
import React from "react";
import { connect } from "react-redux";
import { removeExpense } from "../actions/expenses";
import selectExpenses from "../selectors/expenses";

const ExpenseListItem = ({ dispatch, id, description, amount, createdAt }) => (
  <div>
    <h4>{description}</h4>
    <p>Amount: ${amount}</p>
    <p>Created at: {createdAt}</p>
    <button
      onClick={() => {
        dispatch(removeExpense({ id }));
      }}
    >
      Remove
    </button>
  </div>
);

const mapStateToProps = (state) => {
  return { expenses: state.expenses };
};

export default connect(mapStateToProps)(ExpenseListItem);
