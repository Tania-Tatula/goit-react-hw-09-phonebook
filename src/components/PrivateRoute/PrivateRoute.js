import React from "react";
import { Route, Redirect } from "react-router-dom";
import { authSelectors } from "../../redux/auth";
import { useSelector } from "react-redux";

/**
 * - Если маршрут приватный и пользователь залогинен, рендерит компонент
 * - В противном случае рендерит Redirect на /login
 */
export default function PrivateRoute({
  component: Component,
  isAuthenticated,
  redirectTo,
  ...routeProps
}) {
  const isLoggeIn = useSelector(authSelectors.getIsAuthenticated);

  return (
    <Route
      {...routeProps}
      render={(props) =>
        isLoggeIn ? <Component {...props} /> : <Redirect to={redirectTo} />
      }
    />
  );
}
