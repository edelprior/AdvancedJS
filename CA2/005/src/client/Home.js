import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import CreateComment from './CreateComment';
import EditComment from './EditComment';
import CommentList from './CommentList';
import axios from 'axios';
export default class Home extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <HashRouter>
        <div>
          <Route exact path="/" component={CommentList}/>
          <Route path="/edit-comment/:id" component={EditComment}/>
          <Route path="/create-comment" component={CreateComment}/>
        </div>
      </HashRouter>
    );
  }
}
