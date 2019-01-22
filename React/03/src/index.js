import React from "react";
import ReactDOM from "react-dom";
import Comment from "./Comment";
import axios from "axios";

class CommentList extends React.Component {
  constructor(props) {
    super(props);

    this.state = { comments: [] };
  }

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/comments/")
      .then(response => {
        this.setState({ comments: response.data });
        console.log(this.state);
        console.log(this.state.comments[1]);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    //     const commentList = this.state.comments.map(item => (
    //       <Comment
    //         key={item.id}
    //         name={item.name}
    //         email={item.email}
    //         body={item.body}
    //       />
    //     ));
    //
    //     return <div>{commentList}</div>;
    //   }
    // }

    return (
      <div>
        {" "}
        <h1> test </h1>{" "}
      </div>
    );
  }
}

ReactDOM.render(<CommentList />, document.getElementById("root"));
