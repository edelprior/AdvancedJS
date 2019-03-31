import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import CreateComment from './CreateComment';
import EditComment from './EditComment';
import CommentList from './CommentList';
import Button from '@material/react-button';

import './app.css';
// 'main' Component. Sets up the React Router and respective routes
const App = () => {
  return(
    <HashRouter>
      <div>
        <Route exact path="/" component={CommentList}/>
        <Route path="/edit-comment/:id" component={EditComment}/>
        <Route path="/create-comment" component={CreateComment}/>
        <Button raised> Button </Button>
      </div>
    </HashRouter>
  );
};

export default App;
