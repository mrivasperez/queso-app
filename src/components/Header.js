import React from "react";
import { NavLink } from "react-router-dom";
const Header = () => (
  <header>
    <h1>queso</h1>
    <NavLink to="/" activeClassName="is-active" exact={true}>
      Home{" "}
    </NavLink>
    <NavLink to="/create" activeClassName="is-active" exact={true}>
      Create{" "}
    </NavLink>
    <NavLink to="/help" activeClassName="is-active" exact={true}>
      Help{" "}
    </NavLink>
  </header>
);

export default Header;
