import React from "react";
import ReactDOM from "react-dom";

// Component to represent a single User 'Card' (note: this is a class component so can use state)
// Classes used below are from Bulma, see index.html above
class Comment extends React.Component {
  constructor(props) {
    super(props);

    // Setup the state data
    this.state = {
      likes: 0
    };

    // This binding is necessary to make `this` work in the onclick callback
    this.handleClick = this.handleClick.bind(this);
  }

  // Event handler for the button
  handleClick() {
    // Increment the likes property stored in state
    this.setState(prevState => ({
      likes: prevState.likes + 1
    }));
  }

  // Define what happens when this componet gets drawn on the UI
  render() {
    return (
      <div className="column is-12">
                <p className="title is-4">{this.props.name}</p>
                <p className="subtitle">{this.props.email}</p>
                <h1>Likes: {this.state.likes}</h1>
    );

}


// Allow this to be imported by another JS file
export default Comment;
