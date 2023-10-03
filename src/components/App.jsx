import React, { Component } from 'react';

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
       const newContact = {
      id: Date.now(),
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
        <h1>Phonebook</h1>
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

const ContactForm = ({ name, onChange, onSubmit }) => (
  <form onSubmit={onSubmit}>
    <label>
      Name:
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
    <button type="submit">Add contact</button>
  </form>
);

const ContactList = ({ contacts }) => (
  <ul>
    {contacts.map((contact) => (
      <li key={contact.id}>{contact.name}</li>
    ))}
  </ul>
);

export default App;
