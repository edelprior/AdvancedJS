// ** Activity 1
// 12.12.18
// - - - - - -
// - - - - - -

import React from "react";
import ReactDOM from "react-dom";
import User from "./User"
import data from "./data";
import axios from 'axios';

const users = data.results;

// * * * *
// * * * *


// * * * *

const userList = users.map(u => (
  <User
    key={u.name.first}
    name={u.name}
    image={u.picture.medium}
    quote={u.quote}
  />
));

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
