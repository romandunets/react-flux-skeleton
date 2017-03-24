import React, { Component } from 'react';
import AppDispatcher from '../../dispatcher/AppDispatcher';

class UserForm extends Component {
  constructor() {
    super();
    
    this.state = {
      user: {}
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    let user = this.getUser();
    this.props.handleSubmit(user);
  }

  getUser() {
    return this.state.user;
  }

  updateUser(attribute) {
    let user = this.state.user;
    let attr = Object.keys(attribute)[0];
    user[attr] = attribute[attr];
    this.setState({ user: user });
  }

  onUsernameInputChange(e) {
    let usernameInputValue = e.target.value;
    this.updateUser({ username: usernameInputValue });
  }

  onFirstNameInputChange(e) {
    let firstNameInputValue = e.target.value;
    this.updateUser({ firstName: firstNameInputValue });
  }

  render() {
    return (
      <form onSubmit={ this.handleSubmit.bind(this) }>
        <label htmlFor="username">Username</label>
        <input
          name="username"
          value={ this.state.usernameInputValue }
          onChange={ this.onUsernameInputChange.bind(this) } />
        <label htmlFor="firstName">First name</label>
        <input
          name="firstName"
          value={ this.state.firstNameInputValue }
          onChange={ this.onFirstNameInputChange.bind(this) } />
        <button>Create</button>
      </form>
    );
  }
}

export default UserForm;
