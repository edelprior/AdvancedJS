import React from "react";

class Article extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <nav className="level">
    <p className ="level-item">
      <a className ="link is-info">{this.props.name}</a>
    </p>
    <p className ="level-item ">
      <a className="link is-info">{this.props.section}</a>
    </p>
    <p className="level-item">
      </p>
    <p className="level-item has-text-centered">
      <a className="link is-info">{this.props.webTitle}</a>
      </p>
  </nav>


      //
      //  // <div className="card-content">
      //  //      <div className="media">
      //  //        <div className="media-content">
      //  //          <p className="title is-4"></p>
      //  //          <p className="subtitle is-6">}</p>
      //           <p className="subtitle">{this.props.title}</p>
      //
      // </div>
      // </div>
      // </div>
    );
  }
}

export default Article;
