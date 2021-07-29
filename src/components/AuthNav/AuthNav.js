import React from "react";
import { NavLink } from "react-router-dom";
import routes from "../../routes";

const styles = {
  link: {
    display: "inline-block",
    textDecoration: "none",
    padding: 12,
    fontWeight: 700,
    color: "#2A363B",
  },
  activeLink: {
    color: "#E84A5F",
  },
};

const AuthNav = () => (
  <div>
    <NavLink
      to={routes.registerPage}
      exact
      style={styles.link}
      activeStyle={styles.activeLink}
    >
      Регистрация
    </NavLink>
    <NavLink
      to={routes.loginPage}
      exact
      style={styles.link}
      activeStyle={styles.activeLink}
    >
      Логин
    </NavLink>
  </div>
);

export default AuthNav;
