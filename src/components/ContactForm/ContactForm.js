import React from 'react';
import styles from './ContactForm.module.css';

const ContactForm = ({ name, number, onChange, onSubmit }) => (
    <div className={styles.wrap}>
    <h1 className={styles.h1}>Phonebook</h1>
    <form onSubmit={onSubmit}>
      <p className={styles.p}>Name</p>
      <label className={styles.label}>    
        <input className={styles.input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={onChange}
        />
      </label>
            <p className={styles.p}>Number</p>
            <label className={styles.label}>    
        <input className={styles.input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={onChange}
        />
      </label>     
      <button className={styles.button} type="submit">
        Add contact
            </button>   
    </form>
    
  </div>
  

);

export default ContactForm;
