import React from "react";

class Article extends React.Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div>
          <p>
            <h1>{this.props.name}</h1>
          </p>
        </div>
        <div>
          <p>
            <h2>{this.props.section}</h2>
          </p>
        </div>

        <div>
          <p>
            <href>{this.props.title}</href>
          </p>
        </div>
      </div>
    );
  }
}
export default Article;
