import React from "react";
import ArticleList from "./Components/ArticleList";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      /// grid
      <div>
        <ArticleList />
      </div>
    );
  }
}
export default App;
