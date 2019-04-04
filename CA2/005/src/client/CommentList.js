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
import './App.scss';
import MaterialIcon from '@material/react-material-icon';
import { Body1 } from '@material/react-typography';


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

  componentDidMount() {
    axios.get(`api/properties/${this.props.match.params.id}/comments`)
      .then(response => {
        this.setState({ properties: response.data });
      })
      .catch(error => {
        console.log(error);
      });
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

        <Link className = "BidLink" to={'/create-comment'}>
          <MaterialIcon className = "BidLink" icon = "add" type="button"/>


        </Link>

        <div className = "commentList">{commentList}</div>



      </div>
    );
  }
}

export default CommentList;
