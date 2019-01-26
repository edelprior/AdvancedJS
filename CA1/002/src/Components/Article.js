import React from "react";

class Article extends React.Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>

        <h2>{this.props.section}</h2>

        <a>{this.props.title}</a>
      </div>
    );
  }
}
export default Article;
