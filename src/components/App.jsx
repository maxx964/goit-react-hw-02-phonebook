import React, { Component } from 'react';

import ContactForm from './ContactForm/ContactForm'
import ContactList from './ContactList/ContactList';

import { nanoid } from 'nanoid';

class App extends Component {
  state = {
    contacts: [],
    name: '',
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
    };

    this.setState((prevState) => ({
      contacts: [...prevState.contacts, newContact],
      name: '',
    }));
  };



    render() {
    return (
    <div>
        <ContactForm
          name={this.state.name}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        />
        <h2>Contacts</h2>
        <ContactList contacts={this.state.contacts} />
      </div>
    );
  }
}

export default App;
