import React from "react";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

// --- COMPONENTS ---
import ExpenseDashboardPage from "../components/ExpenseDashboard";
import AddExpensePage from "../components/AddExpensePage";
import EditExpensePage from "../components/EditExpensePage";
import NotFoundPage from "../components/NotFoundPage";
import HelpPage from "../components/HelpPage";
import LoginPage from "../components/LoginPage";
import PrivateRoute from "./PrivateRoute.js";

export const history = createBrowserHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <Route path="/" exact={true} component={LoginPage} />
        <PrivateRoute
          path="/dashboard"
          exact={true}
          component={ExpenseDashboardPage}
        />
        <PrivateRoute path="/create" exact={true} component={AddExpensePage} />
        <PrivateRoute
          path="/edit/:id"
          exact={true}
          component={EditExpensePage}
        />
        <PrivateRoute path="/help" exact={true} component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
