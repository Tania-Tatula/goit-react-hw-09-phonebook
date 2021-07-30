import React from "react";
import { Route, Redirect } from "react-router-dom";
import { authSelectors } from "../../redux/auth";
import { useSelector } from "react-redux";

/**
 * - Если маршрут ограниченный, и пользователь залогинен, рендерит редирект на /todos
 * - В противном случае рендерит компонент
 */
export default function PublicRoute({
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
        isLoggeIn && routeProps.restricted ? (
          <Redirect to={redirectTo} />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
}
