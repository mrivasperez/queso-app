// Export stateless functional component
// Description, amount, createdAt value.
import React from "react";

export default ({ description, amount, createdAt }) => (
  <div>
    <h4>{description}</h4>
    <p>Amount: ${amount}</p>
    <p>Created at: {createdAt}</p>
  </div>
);
