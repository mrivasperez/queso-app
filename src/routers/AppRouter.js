import React from "react";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";

// --- COMPONENTS ---
import ExpenseDashboardPage from "../components/ExpenseDashboard";
import AddExpensePage from "../components/AddExpensePage";
import EditExpensePage from "../components/EditExpensePage";
import NotFoundPage from "../components/NotFoundPage";
import HelpPage from "../components/HelpPage";
import Header from "../components/Header";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" exact={true} component={ExpenseDashboardPage} />
        <Route path="/create" exact={true} component={AddExpensePage} />
        <Route path="/edit/:id" exact={true} component={EditExpensePage} />
        <Route path="/help" exact={true} component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
