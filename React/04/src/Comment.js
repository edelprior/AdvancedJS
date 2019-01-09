import React from "react";

class Comment extends React.Component {
  constructor(props) {
    super(props);

    // Setup the state data
    this.state = {
      flagged: false
    };

    // This binding is necessary to make `this` work in the onclick callback
    this.handleClick = this.handleClick.bind(this);
  }

  // Event handler for the button
  handleClick() {
    // When clicked flip between flagged/not flagged
    this.setState(prevState => ({
      flagged: !prevState.flagged
    }));
  }

  // Define what happens when this component gets drawn on the UI
  // Note the two instances of conditional rendering { ___ ? ___ : ____ }
  render() {
    return (
      <div className="column is-half is-offset-one-quarter">
        <div
          className={
            this.state.flagged
              ? "card notification is-danger"
              : "card notification is-primary"
          }
        >
          <div className="card-content">
            <div className="media">
              <div className="media-content">
                <p className="title is-4">{this.props.name}</p>
                <p className="subtitle is-6">{this.props.email}</p>
                <p className="subtitle">{this.props.body}</p>
                <button type="button" onClick={this.handleClick}>
                  {this.state.flagged
                    ? "Flag as appropriate"
                    : "Flag as inappropriate"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// Allow this to be imported by another JS file
export default Comment;
