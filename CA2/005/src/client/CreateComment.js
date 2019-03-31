import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class CreateComment extends Component {
  constructor(props) {
    super(props);
    // store form fields in state
    this.state = {comment: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    // one of the input boxes changed, update the state to match
    // note: name of the input boxes must match the property names in state
    const comment = event.target.comment;
    const value = event.target.value;

    this.setState({[comment]: value});
  }

  handleSubmit(event) {
    event.preventDefault();

    // send a POST request to the server
    // the request includes the state, which is the info. for the new Comment to be created
    axios.post('/api/comments', this.state)
      .then(res => this.props.history.push('/')) // if successful go to home
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    // note: name of the inputs must match the property names in state
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h2>Create New comment</h2>
          <label>
            Name:
            <input type="text" name="comment" value={this.state.comment} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
          {console.log(this.state.comment)}
        </form>
      </div>
    );
  }
}

export default CreateComment;
