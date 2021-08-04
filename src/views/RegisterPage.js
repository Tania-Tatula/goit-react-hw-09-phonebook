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

export default function RegisterPage() {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);

    dispatch(authOperations.register({ name, email, password }));

    setEmail("");
    setName("");
    setPassword("");
  };

  return (
    <div>
      <h1 className="title">Страница регистрации</h1>
      <div className="container">
        <Form onSubmit={handleSubmit} style={styles.form} autoComplete="off">
          <Form.Label style={styles.label}>
            Имя
            <Form.Control
              type="text"
              name="name"
              value={name}
              onChange={handleNameChange}
            />
          </Form.Label>

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
            Зарегистрироваться
          </Button>
        </Form>
      </div>
    </div>
  );
}
