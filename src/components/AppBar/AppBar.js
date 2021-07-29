import React from "react";
import { useSelector } from "react-redux";
import Navigation from "../Navigation";
import UserMenu from "../UserMenu";
import AuthNav from "../AuthNav";
import { authSelectors } from "../../redux/auth";

export default function AppBar() {
  const isLoggeIn = useSelector(authSelectors.getIsAuthenticated);

  return (
    <header className="Nav">
      <Navigation />
      {isLoggeIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
}
