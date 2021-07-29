import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";
import Loader from "./components/Loader";
import AppBar from "./components/AppBar";
import "./style.css";
import routes from "./routes";
import { useDispatch } from "react-redux";
import { authOperations } from "./redux/auth";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";

const HomeView = lazy(() =>
  import("./views/HomeView" /*webpackChunkName *home-view**/)
);
const RegisterPage = lazy(() =>
  import("./views/RegisterPage" /*webpackChunkName *movies-page**/)
);
const LoginPage = lazy(() =>
  import("./views/LoginPage" /*webpackChunkName *movie-details-page**/)
);
const ContactsPage = lazy(() =>
  import("./views/ContactsPage" /*webpackChunkName *movie-details-page**/)
);

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);

  return (
    <>
      <AppBar />

      <Suspense fallback={<Loader />}>
        <Switch>
          <PublicRoute exact path={routes.home} component={HomeView} />
          <PublicRoute
            exact
            path={routes.registerPage}
            restricted
            redirectTo="/contacts"
            component={RegisterPage}
          />
          <PublicRoute
            path={routes.loginPage}
            restricted
            redirectTo="/contacts"
            component={LoginPage}
          />
          <PrivateRoute
            path={routes.contactsPage}
            component={ContactsPage}
            redirectTo="/login"
          />

          <Route component={HomeView} />
        </Switch>
      </Suspense>
    </>
  );
}
