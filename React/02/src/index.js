// ** Activity 1
// 12.12.18
// - - - - - -
// - - - - - -

import React from "react";
import ReactDOM from "react-dom";
import User from "./User"
import data from "./data";
import axios from 'axios';



class UserGrid extends React.Component {
  constructor(props){
    super(props);

    this.state = {users: []};
  }

  ComponentDidMount() {
    axios.get('https://randomuser.me/api/?results=50')
         .then(response => {
           this.setstate(users :response.data.results);
         })
         .catch(err => {
           console.log(err);
         })
  }

  render() {
    const userList = users.map(u => (
      <User
        key={u.name.first}
        name={u.name}
        image={u.picture.medium}
        quote={u.quote}
      />
    ));
  }
}


const users = data.results;


// * * * *

ReactDOM.render(
  <div className="column-is-multiline">{userList}</div>,
  document.getElementById("root")
);

// setstate is asynchorous
// no gaurantee that it will access the correct state
// when the page is bigger and something else is happening
// it might access the incorrect State
// thats why we're using the prevState =>
// only necessary when you're taking the current state and modifying it to a new one
