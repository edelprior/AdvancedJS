import React from "react";
import NewsCard from "./Components/NewsCard";
import DropDown from "./Components/DropDown";
import LabelledInput from "./Components/LabelledInput";
//import NavBar from "./Components/NavBar";
import axios from "axios";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      sectionSelected: "all",
      searchText: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    axios
      .get(
        // "https://content.guardianapis.com/tags?q=brexit&api-key=b21e1e64-196e-4742-b2b9-5d8ebdbdf57d"
        "https://content.guardianapis.com/search?api-key=b21e1e64-196e-4742-b2b9-5d8ebdbdf57d"
      )
      .then(responseArray => {
        this.setState({
          articles: responseArray.data.response.results
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.pillarName;

    this.setState({
      [name]: value
    });
  }
  handleClick(event) {
    const name = event.target.name;
    this.setState(prevState => ({
      [name]: !prevState[name]
    }));
  }
  render() {
    let articleList = this.state.articles.map(article => {
      const sectionMatch =
        this.state.sectionSelected === article.sectionName ||
        this.state.sectionSelected === "all";
      const searchMatch = article.webTitle.startsWith(this.state.searchText);
      return sectionMatch && searchMatch ? (
        <NewsCard
          key={article.id}
          title={article.webTitle}
          name={article.pillarName}
          section={article.sectionName}
        />
      ) : null;
    });
    return (
      <section>
        <div className="column is multiline">
          <DropDown
            options={["all", "Politics", "Culture", "Lifestyle"]}
            handleChange={this.handleChange}
            label="Filter by Section"
            selected={this.state.sectionSelected}
          />
          <LabelledInput
            name="searchText"
            label="Search by Title"
            value={this.state.searchText}
            onChange={this.handleChange}
            placeholder={"e.g. Corbyn"}
          />
          {console.log(this.state.searchText)}
          <div className="columns is-multiline">{articleList}</div>
        </div>
      </section>
    );
  }
}
export default App;
