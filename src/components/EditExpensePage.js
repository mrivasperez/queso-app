import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { startEditExpense, startRemoveExpense } from "../actions/expenses";

const EditExpensePage = (props) => {
  return (
    <div>
      <div className="page-header">
        <div className="content-container">
          {" "}
          <h1 className="page-header__title">
            Edit Expense: <span>{props.expense.description}</span>
          </h1>
          <div className="page-header__actions">
            <Link className="button" to="/">
              Cancel
            </Link>
          </div>
        </div>
      </div>
      <div className="content-container">
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
          className="button__secondary"
          onClick={() => {
            props.dispatch(startRemoveExpense({ id: props.expense.id }));
            props.history.push("/");
          }}
        >
          Remove Expense
        </button>
      </div>
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
