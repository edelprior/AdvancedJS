import React from "react";
import ReactDOM from "react-dom";
import ArticleList from "./ArticleList";



class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return(
      /// grid
  <div>

      <ArticleList />
      </div>
    )
  }
}
export default App;
