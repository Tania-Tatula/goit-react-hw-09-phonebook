import React, { useEffect } from "react";
import ContactForm from "../components/Contacts/ContactForm";
import Filter from "../components/Contacts/Filter";
import ContactList from "../components/Contacts/ContactList";
import styles from "../components/Contacts/Contacts.module.css";
import { contactsOperations } from "../redux/contacts";
import { useDispatch } from "react-redux";

export default function ContactsPages() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  return (
    <div className={styles.App}>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}
