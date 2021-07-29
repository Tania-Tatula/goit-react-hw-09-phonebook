// import { useState, useCallback } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { connect } from "react-redux";
// import shortid from "shortid";
// import { contactsOperations } from "../../redux/contacts";

// import styles from "./Contacts.module.css";

// export default function ContactForm() {

//   const dispatch = useDispatch();

//   const [name, setName] = useState('');
//   const [number, setNumber] = useState('')

//   const addList = (name, number) => {
//     const contact = {
//       id: shortid.generate(),
//       name,
//       number,
//     };

//     this.setState((prevState) => ({
//       contacts: [contact, ...prevState.contacts],
//     }));
//   };

//   const loginInputId = shortid.generate();

//   const handleInputChange = (evt) => {
//     setName(evt.currentTarget);
//     setNumber(evt.currentTarget);
//     const { name, value } = evt.currentTarget;
//     this.setState({
//       id: shortid.generate(),
//       [name]: value,
//     });
//   };

//   const handleSubmit = (evt) => {
//     evt.preventDefault();
//     const contact = {
//       id: shortid.generate(),
//       name,
//       number,
//     };

//     this.setState((prevState) => ({
//       contacts: [contact, ...prevState.contacts],
//     }));
//     dispatch(contactsOperations.submit(contact));
//     reset();
//   };

//   function reset() {
//     setName('');
//     setNumber('');
//   };

//   return (
//     <div className={styles.contactsBlock}>
//       <form onSubmit={handleSubmit} className={styles.formName}>
//         <label id={loginInputId}>
//           Name
//           <input
//             className={styles.input}
//             type='text'
//             name='name'
//             value={name}
//             onChange={handleInputChange}
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
//             required
//           />
//         </label>
//         <label id={loginInputId}>
//           Number
//           <input
//             className={styles.input}
//             type='tel'
//             name='number'
//             value={number}
//             onChange={handleInputChange}
//             pattern='\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}'
//             title='Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +'
//             required
//           />
//         </label>

//         <button className={styles.button} type='submit'>
//           Add conract
//         </button>
//       </form>
//     </div>
//   );
// }

import { Component } from "react";
import { connect } from "react-redux";
import shortid from "shortid";
import { contactsOperations } from "../../redux/contacts";

import styles from "./Contacts.module.css";

class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  addList = (name, number) => {
    const contact = {
      id: shortid.generate(),
      name,
      number,
    };

    this.setState((prevState) => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  loginInputId = shortid.generate();

  handleInputChange = (evt) => {
    const { name, value } = evt.currentTarget;
    this.setState({
      id: shortid.generate(),
      [name]: value,
    });
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: "", number: "" });
  };

  render() {
    return (
      <div className={styles.contactsBlock}>
        <form onSubmit={this.handleSubmit} className={styles.formName}>
          <label id={this.loginInputId}>
            Name
            <input
              className={styles.input}
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleInputChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
            />
          </label>
          <label id={this.loginInputId}>
            Number
            <input
              className={styles.input}
              type="tel"
              name="number"
              value={this.state.number}
              onChange={this.handleInputChange}
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
}

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (contact) => dispatch(contactsOperations.submit(contact)),
});
export default connect(null, mapDispatchToProps)(ContactForm);
