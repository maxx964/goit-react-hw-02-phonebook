import React from 'react';
import styles from './ContactForm.module.css'



const ContactForm = ({ name, onChange, onSubmit }) => (
    <div className={styles.wrap}>
          <h1>Phonebook</h1>
        <form onSubmit={onSubmit}>
          <span>Name</span>
    <label className={styles.label}>
      <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={name}
        onChange={onChange}
      />
    </label>
    <button className={styles.button} type="submit">Add contact</button>
        </form>
        </div> 
);

export default ContactForm;