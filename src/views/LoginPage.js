import React, { useState } from "react";
import { authOperations } from "../redux/auth";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { useDispatch } from "react-redux";

const styles = {
  form: {
    width: 320,
  },
  label: {
    display: "flex",
    flexDirection: "column",
    marginBottom: 15,
  },
};

export default function LoginPage(logIn) {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);

    dispatch(authOperations.logIn({ email, password }));

    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <h1 className="title">Страница логина</h1>
      <div className="container">
        <Form onSubmit={handleSubmit} style={styles.form} autoComplete="off">
          <Form.Label style={styles.label}>
            Почта
            <Form.Control
              type="email"
              name="email"
              value={email}
              onChange={handleEmailChange}
            />
          </Form.Label>

          <Form.Label style={styles.label}>
            Пароль
            <Form.Control
              type="password"
              name="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </Form.Label>

          <Button variant="outline-success" type="submit">
            Войти
          </Button>
        </Form>
      </div>
    </div>
  );
}
