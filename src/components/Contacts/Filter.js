import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { contactsActions, contactsSelector } from "../../redux/contacts";

import styles from "./Contacts.module.css";

export default function Filter() {
  const dispatch = useDispatch();
  const value = useSelector(contactsSelector.getValue);
  const onChange = useCallback(
    (evt) => {
      dispatch(contactsActions.changeFilter(evt.currentTarget.value));
    },
    [dispatch]
  );
  return (
    <div className={styles.contactsBlock}>
      <label>
        Find contact by name
        <input
          className={styles.input}
          type="text"
          value={value}
          onChange={onChange}
        />
      </label>
    </div>
  );
}
