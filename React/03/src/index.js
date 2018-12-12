import React from 'react';
import ReactDOM from 'react-dom';
import data from './data';

const users = data.results;

class User extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className = "column-is-3">
    <div className = "card">


    <div className = "card-content">
    <div className = "media">
    <div className = "media-left">
    <figure className = "image is-20x20">
        <img src = {this.props.image} alt="Placeholder Image" />
        </figure>
        </div>
        <div className = "content">
          <h1 className = "title">{this.props.name.first} {this.props.name.last}  </h1>
          <h2 className = "subtitle is-5">{this.props.quote} </h2>
      </div>
    </div>
  </div>
</div>
</div>
  );
  }
}

const userList = users.map(u =>  <User key = {u.name.first} name = {u.name} image={u.picture.medium} quote= {u.quote}/>);

ReactDOM.render(
  <div className = "column-is-multiline"> {userList}</div>,
  document.getElementById('root')
);

// dont use class inside

//target container is not a DOM elememt (where we're injecting has to have the same name)

// - - - - - -- - -- - -- - -- - -- - -- - -
// - - -- - -- - -- - -- - -- - -- - -- - --
// - - -- - -- - -- - -- - -- - -- - -- - --
// * * Activity Two :: State //
//
// import React from 'react';
// import ReactDOM from 'react-dom';
//
// class Clicky extends React.Component {
//   constructor(props) {
//   super(props);
//
//
//   // FIRST PART
//   // data thats going to change goes below
//   // can hold multiple things, as it's.. an object
//   this.state = {clickCount: 0};
//   this.handleClick = this.handleClick.bind(this);
//
//    }
//
//
// handleClick(){
//   // THIRD PART modify the state and add in a new one
//   this.setState( {clickCount: this.state.clickCount + 1});
//   console.log("clicked");
// }
//
//
// //SECOND PART
// // using the state somewhere else means we have to incorporate this.
// // watches the elements all the time and reacts and updates it
//   render() {
//     return(
//       <div>
//       <h1>{this.state.clickCount} times clicked </h1>
//       <button onClick = {this.handleClick}> My name is {this.props.name} Click me I love to be clicked </button>
//       </div>
//     );
//   }
// }
// ReactDOM.render(
//   <div>
//   <Clicky name="Click Junior"/>
//   </div>,
//   document.getElementById('root')
// );
