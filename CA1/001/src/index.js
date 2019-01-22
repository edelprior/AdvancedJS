import React from "react";
import ReactDOM from "react-dom";
import Article from "./Article";
import axios from "axios";

class ArticleList extends React.Component {
  constructor(props) {
    super(props);

    this.state = { articles: [] };
  }

  componentDidMount() {
    axios
      .get(
        "https://content.guardianapis.com/search?api-key=b21e1e64-196e-4742-b2b9-5d8ebdbdf57d"
      )
      .then(responseArray => {
        this.setState({
          articles: responseArray.data.response.results
        });
        console.log(this.state);
        // issue here
        console.log(this.state.responseArray[0]);
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    // const articleList = this.state.articles.map(item => (
    //   <Article
    //     key={item.id}
    //     name={item.pillarName}
    //     section={item.sectionName}
    //     title={item.webTitle}
    //   />
    // ));

    return (
      <div>
        {" "}
        <h1> test </h1>{" "}
      </div>
    );
  }
}

ReactDOM.render(<ArticleList />, document.getElementById("root"));
