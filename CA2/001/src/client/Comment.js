import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

// Component to represent a single comment 'Card'
// note that the edit button navigates to a new URL (which will load a new Component via React Router)
// whereas the delete button invokes a function in the parent Component
class Comment extends React.Component {

  // define what happens when this componet gets drawn on the UI
  render() {
    return (
      <div>
        <div>
          <p>{this.props.comment}</p>
          <button type="button" onClick={() => {this.props.handleDelete(this.props.id);}}>
                  Delete
          </button>
          <Link to={`/edit-comment/${this.props.id}`}>
            <button type="button">
                  Edit
            </button>
          </Link>
        </div>
      </div>

    );
  }
}

export default Comment;
