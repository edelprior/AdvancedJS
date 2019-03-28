{/*
  Functionality of Start.js :
  - Introduces the application, is the first page the user sees
  - Holds a router that renders the '/' of the server, the commentList
  - Has the routes that will be accessed in the other components for CRUD
  */}


// - - -React, Router and Styles  - - - - - - - - //

import React, { Component } from 'react';
import axios from 'axios';
import { HashRouter, Route } from 'react-router-dom';
import './App.scss';

// - - - - - Material Imports - - - - - - - - - - //
import {Cell, Grid, Row} from '@material/react-layout-grid';
import { Headline2, Headline4,Headline5, Body1} from '@material/react-typography';
import Button from '@material/react-button';
import MaterialIcon from '@material/react-material-icon';
// - - - - - - - - - - - - - - - - - - - - - //

// - - - - - Components  - - - - - - - - - - //
import CreateComment from './Components/CreateComment';
import CommentList from './Components/CommentList';
import EditComment from './Components/EditComment';

// - - - - - - - - - - - - - - - - - - - - - //

export default class Secret extends Component {
  constructor() {
    super();
    this.state = {
      message: 'Loading...'
    };
  }

  componentDidMount() {
    axios.get('/api/secret')
      .then(response => this.setState({message: response.data}));
  }

  render() {
    return (
      <HashRouter>
        <Grid>
    
          <Row>
            <Cell className = "commentSection" columns = {12}>
              <Headline2 className = "commentTitle"> Comments </Headline2>
              <Route exact path="/" component={CommentList}/>
              <Route path="/edit-user/:id" component={EditComment}/>
              <Route path="/create-user" component={CreateComment}/>
            </Cell>
          </Row>
        </Grid>
      </HashRouter>
    );
  }
}
