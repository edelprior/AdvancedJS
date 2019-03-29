import React, { Component } from 'react';
import axios from 'axios';
import TextField, {HelperText, Input} from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';
import Button from '@material/react-button';

import './App.scss';
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email : '',
      password: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleInputChange(event) {
    const { value, name } = event.target;
    this.setState({
      [name]: value
    });
  }

  onSubmit(event) {
    event.preventDefault();
    axios.post('/api/authenticate', this.state)
      .then(res => {
        if (res.status === 200) {
          // run the login function in the parent component
          this.props.handleLogin();
          // redirect to /
          this.props.history.push('/');
        } else {
          const error = new Error(res.error);
          throw error;
        }
      })
      .catch(err => {
        console.error(err);
        alert('Error logging in please try again');
      });
  }

  render() {
    return (
      <form className = "LoginForm"onSubmit={this.onSubmit}>

        <TextField className = "Search">
          <Input
            type="email"
            name="email"
            placeholder="email"
            value={this.state.email}
            onChange={this.handleInputChange}
            required />
        </TextField>


        <TextField className = "Search">
          <Input
            type="password"
            name="password"
            placeholder="Enter password"
            value={this.state.password}
            onChange={this.handleInputChange}
            required
          />
        </TextField>
        <Button dense type="submit" value="Submit"> Log In </Button>
      </form>
    );
  }
}
