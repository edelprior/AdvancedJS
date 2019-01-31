import React from "react";

class Article extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="level">
        <div className="level-left">
          <p className="level-item">
            <h1 className="link is-info">{this.props.name}</h1>
          </p>
        </div>

        <div className="level">
          <p className="level-item ">
            <h2 className="link is-info">{this.props.section}</h2>
          </p>
        </div>

        <div className ="level-left">
        <p className="level-item" />
        <p className="level-item has-text-centered">
          <a className="link is-info">{this.props.title}</a>
        </p>
        </div>

    </div>
    );
  }
}
export default Article;
