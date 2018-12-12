import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();



// * * Activity Two :: State //

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
