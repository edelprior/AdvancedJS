// ** Activity 1
// 12.12.18
// - - - - - -
// - - - - - -

import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";


class Color extends React.Component {
  constructor(props) {
    super(props);

    this.state = { colors: [] };
  }

  componentDidMount() {

      axios.get('http://www.colr.org/json/colors/random/7')
           .then(response => {
             //console.log(response.data.colors);
             this.setState({ colors:response.data.colors});
           })
           .catch(err => {
             console.log(err);
         })
  }

  render() {
    //console.log(this.state.colors);
    const colorList = this.state.colors.map(c =>
      <Color
        key = {c.id}
        hex = {c.hex}
        name = {c.name}
      />
    );
    return (
      <div> {colorList} </div>
   );
  }
}

ReactDOM.render(
  <Color />,
  document.getElementById("root")
);

// setstate is asynchorous
// no gaurantee that it will access the correct state
// when the page is bigger and something else is happening
// it might access the incorrect State
// thats why we're using the prevState =>
// only necessary when you're taking the current state and modifying it to a new one
//       let colors = data.results;
