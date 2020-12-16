import React from "react";
import { NavLink, Link } from "react-router-dom";
import { connect } from "react-redux";
import { startLogout } from "../actions/auth";

export const Header = ({ startLogout }) => (
  <header className="header">
    <Link className="header__title" to="/dashboard" exact={true}>
      <img
        className="header__title__logo"
        src="/images/logo.svg"
        alt="a slice of cheese"
      />
      <h1>queso</h1>
    </Link>
    <NavLink to="/create" activeClassName="is-active" exact={true}>
      Create Expense{" "}
    </NavLink>

    <button onClick={startLogout}>Logout</button>
  </header>
);

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout()),
});

export default connect(undefined, mapDispatchToProps)(Header);
