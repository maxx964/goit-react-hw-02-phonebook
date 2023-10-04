import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';

class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

constructor() {
  super();
  this.state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: ''
  };
  };



  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.contacts.some((contact) => contact.name === this.state.name)) {
      alert('This name is already in the list');
      return;
    }
    const id = nanoid();
    const newContact = {
      id: id,
      name: this.state.name,
      number: this.state.number,
    };

    this.setState((prevState) => ({
      contacts: [...prevState.contacts, newContact],
      name: '',
      number: '',
    }));
  };
// ===========================================================
handleFilterChange = (e) => {
  const { name, value } = e.target;
  this.setState({ [name]: value });
};
// ================================================================

  handleDeleteContact = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== id),
    }));
  };

  render() {
    return (
      <div>
        <ContactForm
          name={this.state.name}
          number={this.state.number}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        />
        <h2>Contacts</h2>
        <input
  type="text"
  name="filter"
  placeholder="Find contacts by name"
  value={this.state.filter}
  onChange={this.handleFilterChange}
/>

        <ContactList
          contacts={this.state.contacts}
          onDeleteContact={this.handleDeleteContact}
           filter={this.state.filter}
        />
      </div>
    );
  }
}

export default App;
