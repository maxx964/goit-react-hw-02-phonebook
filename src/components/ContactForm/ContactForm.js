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
          placeholder="First or last name "
          required
          value={name}
          onChange={onChange}
          autoComplete="name"
        />
      </label>
            <p className={styles.p}>Number</p>
            <label className={styles.label}>    
        <input className={styles.input}
          type="tel"
          name="number"
          placeholder="Phone Number"
          required
          value={number}
          onChange={onChange}
          autoComplete="tel"
        />
      </label>     
      <button className={styles.button} type="submit">
        Add contact
            </button>   
    </form>
  </div>
);

export default ContactForm;
