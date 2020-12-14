import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { startEditExpense, startRemoveExpense } from "../actions/expenses";

const EditExpensePage = (props) => {
  console.log(props);
  return (
    <div>
      <h3>Editing "{props.expense.description}"</h3>
      <ExpenseForm
        submitButtonText="Save Changes"
        expense={props.expense}
        onSubmit={(expense) => {
          // Dispatch the action to edit the expense
          props.dispatch(startEditExpense(props.expense.id, expense));
          // Redirect to the dashboard
          props.history.push("/");
        }}
      />
      <button
        onClick={() => {
          props.dispatch(startRemoveExpense({ id: props.expense.id }));
          props.history.push("/");
        }}
      >
        Remove
      </button>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find(
      (expense) => expense.id === props.match.params.id
    ),
  };
};

export default connect(mapStateToProps)(EditExpensePage);
