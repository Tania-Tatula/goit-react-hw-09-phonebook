import React, { useState } from "react";
import shortid from "shortid";
import { contactsOperations } from "../../redux/contacts";
import { useDispatch } from "react-redux";

import styles from "./Contacts.module.css";

export default function ContactForm(onSubmit) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const dispatch = useDispatch();

  const loginInputId = shortid.generate();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleNumberChange = (e) => {
    setNumber(e.target.value);
  };

  const reset = () => {
    setName("");
    setNumber("");
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(
      contactsOperations.submit({ id: shortid.generate(), name, number })
    );
    reset();
  };

  return (
    <div className={styles.contactsBlock}>
      <form onSubmit={handleSubmit} className={styles.formName}>
        <label id={loginInputId}>
          Name
          <input
            className={styles.input}
            type="text"
            name="name"
            value={name}
            onChange={handleNameChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </label>
        <label id={loginInputId}>
          Number
          <input
            className={styles.input}
            type="tel"
            name="number"
            value={number}
            onChange={handleNumberChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
          />
        </label>

        <button className={styles.button} type="submit">
          Add conract
        </button>
      </form>
    </div>
  );
}
