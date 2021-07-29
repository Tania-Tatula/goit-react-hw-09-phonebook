import React from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";
import styles from "./Contacts.module.css";
import { ReactComponent as CloseIcon } from "../../icons/delete.svg";
import { contactsSelector, contactsOperations } from "../../redux/contacts";

export default function ContactList() {
  const dispatch = useDispatch();
  const contactList = useSelector(contactsSelector.getVisibleContacts);
  const onDeleteContact = useCallback(
    (contactId) => {
      dispatch(contactsOperations.deleteContact(contactId));
    },
    [dispatch]
  );

  return (
    <>
      <ul className={styles.contactsBlock}>
        {contactList.map(({ name, number, id }) => (
          <li className={styles.contactItem} key={id}>
            {name}: {number}
            <button
              onClick={() => onDeleteContact(id)}
              className={styles.buttonDelete}
              aria-label="Видалити контакт"
            >
              <CloseIcon width="20" height="20" fill="#fff" />
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

ContactList.propTypes = {
  contactList: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
