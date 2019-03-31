import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class EditComment extends Component {
  constructor(props) {
    super(props);
    // store information relating to the Comment in state
    // should match the Comment object from the API
    this.state = {_id: '', comment: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    // when this Component mounts, fetch data relating to the comment to be edited
    // the comment's ID is passed in via the URL and accessed via props
    axios.get('/api/comments/' + this.props.match.params.id)
      .then(response => {
        this.setState({
          _id: response.data._id,
          name: response.data.name,
          picture: response.data.picture,
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleChange(event) {
    // one of the input boxes changed, update the state to match
    // note: name of the input boxes must match the property names in state
    const name = event.target.name;
    const value = event.target.value;

    this.setState({[name]: value});
  }

  handleSubmit(event) {
    event.preventDefault();

    // send a PUT request to the server
    // the request includes the state, which is the updated comment information
    axios.put('/api/comments', this.state)
      .then(res => this.props.history.push('/')) // if successful go to home
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    // note: name of the inputs must match the property names in state
    return (
      <div>
        <h2>Edit comment</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Comment:
            <input type="text" name="name" value={this.state.comment} onChange={this.handleChange} />
          </label>

          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default EditComment;
