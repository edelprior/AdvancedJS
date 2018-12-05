import React from 'react';
import ReactDOM from 'react-dom';

// user User Component
// functions have no state (they don't change with interaction)
// function version
const users = [

  {name: 'Evan', age:22, image: "http://showcase.iadt.ie/assets/CC3/Headshot/N00150552_Profile.jpg" },
  {name: 'Edel', age:21,  image: "http://showcase.iadt.ie/assets/CC3/Headshot/N00153748_Profile.jpg" },
  {name: 'Cillian', age:25, image: "http://showcase.iadt.ie/assets/CC3/Headshot/N00152737_Profile.jpg" }

];

class User extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
      <h4>{this.props.name}</h4>
      <p style={{"color": "red"}}>{this.props.age} </p>
      <img width="75" height="75" src = {this.props.image} />
      </div>
  );
  }
}

const userList = users.map(u =>  <User name = {u.name}  age= {u.age} image={u.image}/>);

ReactDOM.render(
  <div> {userList} </div>,
  document.getElementById('root')
);



// dont use class inside

//target container is not a DOM elememt (where we're injecting has to have the same name)
