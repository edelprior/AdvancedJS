import React from "react";

class Article extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="column is-multiline">
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">{this.props.pillarName}</p>
              <p className="subtitle is-6">{this.props.sectionName}</p>
              <p className="subtitle is-6">{this.props.webTitle}</p>
              <p className="subtitle">{this.props.webUrl}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Article;
