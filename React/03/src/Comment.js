import React from "react";

class Comment extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <p>{this.props.name}</p>
        <p>{this.props.email}</p>
        <p>{this.props.body}</p>
      </div>
    );
  }
}
// Allow this to be imported by another JS file
export default Comment;
