import React, { Component } from 'react';

class Module extends Component {

  render() {

    return (
      <div>
        <h2>{this.props.name}</h2>
        <p>Credits: {this.props.credits}</p>
        <p>Runs for {this.props.weeks} weeks</p>
      </div>
    );
  };
}

export default Module;
