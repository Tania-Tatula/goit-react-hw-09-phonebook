import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authSelectors, authOperations } from "../../redux/auth";
import defaultAvatar from "./default-avatar.png";
import { Button } from "react-bootstrap";

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);

  // Якщо залежносты вказаны в масиві зміняться, то тільки тоді елемент перерендериться
  const onLogOut = useCallback(() => {
    dispatch(authOperations.logOut());
  }, [dispatch]);

  return (
    <div className="container">
      <img src={defaultAvatar} alt="" width="32" className="avatar" />
      <span className="name">Welcome, {name}</span>
      <Button variant="outline-success" type="button" onClick={onLogOut}>
        Logout
      </Button>
    </div>
  );
}
