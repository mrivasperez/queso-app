/* Higher Order Component (HOC)
 -  A component (HOC) that render another component.
 Uses: Reuse code, hijack render, manipulate props, and abstract the state
*/

// Example:
import React from "react";
import ReactDOM from "react-dom";

const Info = (props) => (
  <div>
    <h1>Information</h1>
    <p>There is so much info: {props.info}</p>
  </div>
);

// Admin message
const withAdminWarning = (WrappedComponent) => {
  // Higher order component is returned here
  return (props) => (
    <div>
      {props.isAdmin && <p>This is a warning!</p>}
      <WrappedComponent {...props} />
    </div>
  );
};

const requireAuthentification = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAuthenticated ? (
        <div>
          <p>You are welcome here!</p>
          <WrappedComponent {...props} />
        </div>
      ) : (
        <p>You must sign in.</p>
      )}
    </div>
  );
};

// Challenge: requireAuthentification.

const AuthInfo = requireAuthentification(Info);
const AdminInfo = withAdminWarning(Info);

// ReactDOM.render(
//   <AdminInfo isAdmin={false} info="This is the detail!" />,
//   document.getElementById("app")
// );

ReactDOM.render(
  <AuthInfo isAuthenticated={true} info="This is the info prop!" />,
  document.getElementById("app")
);
