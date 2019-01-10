import React from "react";
import ReactDOM from "react-dom";


class Color extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      likes: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  // * * * *
  handleClick() {
    this.setState(prevState => ({
      likes: prevState.clickCount + 1
    }));
  }


  // * * * *

  render() {
    return (
      <div className="column-is-3">
        <div className="card">
          <div className="card-image">
            <div className="media">
              <div className="media-left">
                <figure className="image is-20x20">
                  <img src={this.props.image} alt="Placeholder Image" />
                </figure>
              </div>
              <div className="content">
                <h1 className="title">
                  {this.props.name.first}
                  {this.props.name.last}
                </h1>
                <h2 className="subtitle is-5">{this.props.quote}</h2>

                <a onClick={this.handleClick}>
                  <i class="fas fa-heart" aria-hidden="true">
                    {" "}
                  </i>
                  {this.state.likes}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default User;
