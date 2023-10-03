import React from 'react';

const ContactList = ({ contacts, onDeleteContact }) => (
  <ul>
    {contacts.map(({ id, name }) => (
      <li key={id}>
        {name}
      </li>
    ))}
  </ul>
);

export default ContactList;
