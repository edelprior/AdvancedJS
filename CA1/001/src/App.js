import React from "react";
import ReactDOM from "react-dom";
import ArticleList from "./components/ArticleList";
import {Cell, Grid, Row} from '@material/react-layout-grid';
import './App.scss';


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
