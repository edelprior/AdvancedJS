// ANDREWS EXAMPLE


import React from "react";
import ReactDOM from "react-dom";
// Note: ensure you've installed axios with 'npm install axios'
import axios from "axios";

// 'Outer' component that will contain all the User 'cards'
class Comment extends React.Component {
  constructor(props) {
    super(props);

    this.state = { comments: [] };
  }

  // Runs when component is mounted
  componentDidMount() {
    // Get data for 50 users
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then(response => {
        // GET request was successful, store the users in state
      console.log(this.setState({ comments: response.data }));
      })
      .catch(err => {
        // GET failed, log the error
        console.log(err);
      });
  }

  render() {
    const commentList = this.state.comments.map(c => (
      <Comment
        key = { c.id }
        name ={ c.name }
        email ={ c.email }
        body = { c.body }
      />
    ));

    return <div className="columns is-multiline">{commentList}</div>;
  }
}

ReactDOM.render(<Comment />, document.getElementById("root"));
