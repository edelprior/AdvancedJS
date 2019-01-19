import React from "react";

class Article extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>
          <div>
            <div>
              <p>{this.props.pillarName}</p>
              <p>{this.props.sectionName}</p>
              <p>{this.props.webTitle}</p>
              <p>{this.props.webUrl}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Article;
