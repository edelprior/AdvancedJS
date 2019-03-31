{/*
  Functionality of CommentList.js :

  - Gets a list of comments from the DB and returns them
  - returns in a comment Component, and offers Delete and
  - Edit functions of each, including re-rendering so the
  - List gets updated with each interaction.
  */}


// - - - - - React & Axios & Link - - - - - - //

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../App.scss';

// - - - - - Material Imports - - - - - - - - //
import Button from '@material/react-button';

// - - - - - Components - - - - - - - - - - //
import Comment from './Comment';

// - - - - - - - - - - - - - - - - - - - - - //

class CommentList extends Component {
  constructor(props) {
    super(props);
    {/*  store the array that will be gotten from the DB
         in an  array in the state & updatecomments to fetch
         the data from the DB, aswell as handleDelete to give
         delete function part of the CRUD */}

    this.state = { comments: [] };
    this.updateComments = this.updateComments.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  // - - - - - - - - - - - - - - - - - - - - - //

  componentDidMount() {
    // Gives the 'list' of Comments from the DB at the time of mounting
    this.updateComments();
  }

  // - - - - - - - - - - - - - - - - - - - - - //

  updateComments() {
    // make a GET request to the server for the Comment data, store it in state
    axios.get('api/comments')
      .then(response => {
        this.setState({ comments: response.data });
      })

      .catch(error => {
        console.log(error);
      });

    console.log(this.comments);
  }

  // - - - - - - - - - - - - - - - - - - - - - //

  handleDelete(commentId) {
    // make a DELETE request to the server to remove the comment with this commentId
    axios
      .delete('api/comments', {
        data: {
          id: commentId
        }
      })
      .then(response => {
        // if delete was successful,
        // re-fetch the list of comments,
        // will trigger a re-render
        this.updateComments();
      })
      .catch(error => {
        console.log(error);
      });
  }


  // - - - - - - - - - - - - - - - - - - - - - //

  render() {
    // maps through the CommentList and gives a <Comment> component
    const commentList = this.state.comments.map(c => (
      <Comment
        key={u._id}
        id={u._id}
        comment ={u.comment}
        handleDelete={this.handleDelete}
      />
    ));

    // Gives a create function at the top of the CommentList, redirecting
    // the comment to /create-comment through <Link>

    return (
      <div className = "commentTitle">
        <Link to={'/create-comment'}>
          <Button> Add a Comment </Button>
        </Link>
        <div>{commentList}</div>
      </div>

    // - - - - - - - - - - - - - - - - - - - - - //

    );
  }
}

export default CommentList;
