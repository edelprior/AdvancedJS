import React from "react";

class Article extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <p>{this.props.pillarName}</p>
        <p>{this.props.sectionName}</p>
        <p>{this.props.webTitle}</p>
      </div>
    );
  }
}

export default Article;
