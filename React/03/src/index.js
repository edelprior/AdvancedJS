import React from "react";
import ReactDOM from "react-dom";
import Comment from "./Comment";
// Note: ensure you've installed axios with 'npm install axios'
import axios from "axios";

class CommentList extends React.Component {
  constructor(props) {
    super(props);

    // this is where we will store the comments, when they have been retrieved
    this.state = { comments: [] };
  }

  // Runs when component is mounted
  componentDidMount() {
    // Get data for 500 comments
    axios
      .get("https://jsonplaceholder.typicode.com/comments/")
      .then(response => {
        // GET request was successful, store the comments in state
        this.setState({ comments: response.data });
      })
      .catch(err => {
        // GET failed, log the error
        console.log(err);
      });
  }

  render() {
    // For each comment, generate a Comment component and pass data in as props
    const commentList = this.state.comments.map(item => (
      <Comment
        key={item.id}
        name={item.name}
        email={item.email}
        body={item.body}
      />
    ));

    return <div className="columns is-multiline">{commentList}</div>;
  }
}

ReactDOM.render(<CommentList />, document.getElementById("root"));
