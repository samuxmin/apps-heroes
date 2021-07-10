import React, { useContext } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { LoginScreen } from "../component/login/LoginScreen";
import { PrivateRoute } from "./PrivateRoute";
import { AuthContext } from "../auth/AuthContext";
import { DashboardRoutes } from "./DashboardRoutes";
import { PublicRoute } from "./PublicRoute";
export const AppRouter = () => {
  const { user } = useContext(AuthContext);

  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute
            exact
            path="/login"
            component={LoginScreen}
            isAuth={user.logged}
          />
          <PrivateRoute
            isAuth={user.logged}
            path="/"
            component={DashboardRoutes}
          />
        </Switch>
      </div>
    </Router>
  );
};
