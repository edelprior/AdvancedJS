import React from 'react';
import ReactDOM from 'react-dom';


const users = [

  {name: 'Edel', age: 21 }

];

class App extends React.Component {
constructor(props){
  super(props);
}


  render() {

    return (

      <div>

      <h4>{this.props.name}</h4>

      <p >{this.props.age} </p>

      </div>

  );
  }
}

const userList = users.map( u => name={u.name} age={u.age/>);

export default App;
