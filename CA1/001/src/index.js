import React from "react";
import ReactDOM from "react-dom";
import Article from "./Article";
import axios from "axios";

class ArticleList extends React.Component {
  constructor(props) {
    super(props);

    this.state = { articles: [] };

    //  console.log(this.state);
  }

  componentDidMount() {
    axios
      .get(
        "https://content.guardianapis.com/search?api-key=b21e1e64-196e-4742-b2b9-5d8ebdbdf57d"
      )
      .then(response => {
        this.setState({ articles: response.data.response.results });
        //    this.setState({ returnValue: response.data.response.status });
        //    console.log(this.state);
      })
      .catch(err => {
        console.log(err);
      });
  }

  // * * * * * * * * * * * *

  render() {
    // For each Article generate a component and pass data as props
    const articleList = this.state.articles.map(x => (
      <Article
        key={x.id}
        name={x.pillarName}
        section={x.sectionName}
        title={x.webTitle}
        link={x.webUrl}
      />
    ));

    return <div className="columns is-multiline"> {articleList}</div>;
  }
}

ReactDOM.render(<ArticleList />, document.getElementById("root"));
