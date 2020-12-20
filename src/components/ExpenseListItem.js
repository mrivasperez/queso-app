// Export stateless functional component
// Description, amount, createdAt value.
import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import numeral from "numeral";

const ExpenseListItem = ({ dispatch, id, description, amount, createdAt }) => (
  <Link to={`/edit/${id}`} className="list-item">
    <div>
      <h3>{description}</h3>
      <span>{moment(createdAt).format("MMMM Do YYYY")}</span>
    </div>
    <h4> {numeral(amount / 100).format("$0,0.00")}</h4>
  </Link>
);

const mapStateToProps = (state) => {
  return { expenses: state.expenses };
};

export default ExpenseListItem;
