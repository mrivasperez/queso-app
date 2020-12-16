import React from "react";
import { connect } from "react-redux";
import { startLogin } from "../actions/auth";

export const LoginPage = ({ startLogin }) => (
  <div className="box-layout">
    <div className="box-layout__box">
      <img src="/images/logo.svg" alt="A slice of cheese" />
      <h1 className="box-layout__title"> queso</h1>
      <p className="box-layout__subtitle">
        A simple way to manage your expenses.
      </p>
      <button className="button__login" onClick={startLogin}>
        Login with Google
      </button>
    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin()),
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
