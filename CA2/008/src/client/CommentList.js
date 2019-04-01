import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Comment from './Comment';
import axios from 'axios';
import './app.css';

class CommentList extends Component {
  constructor(props) {
    super(props);
    // store the array of comments in state
    this.state = { comments: [] };

    this.updateComments = this.updateComments.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    // when the component mo THIS IS THE FUNCTION
    this.updateComments();
  }

  updateComments() {
    // make a GET request to the server for the comment data, store it in state
    axios.get('api/comments')
      .then(response => {
        this.setState({ comments: response.data });
      })
      .catch(error => {
        console.log(error);

      });

  }

  handleDelete(commentId) {
    // make a DELETE request to the server to remove the comment with this commentId
    axios
      .delete('api/comments', {
        data: {
          id: commentId
        }
      })
      .then(response => {
        // if delete was successful, re-fetch the list of comments, will trigger a re-render
        this.updateComments();
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    // for each comment object, produce a comment Component
    const commentList = this.state.comments.map(u => (
      <Comment
        key={u._id}
        id={u._id}
        comment={u.comment}
        handleDelete={this.handleDelete}
      />

    ));
    {console.log(this.state);}

    return (
      <div>
        <Link to={'/create-comment'}>
          <button type="button">
          Create new comment
          </button>
        </Link>
        <h2>All comments</h2>
        <div>{commentList}</div>
      </div>
    );
  }
}

export default CommentList;
