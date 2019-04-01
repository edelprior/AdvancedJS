import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './app.scss';
import Property from './Property';
import {Cell, Grid, Row} from '@material/react-layout-grid';


class PropertyList extends Component {
  constructor(props) {
    super(props);
    this.state = { properties: [] };
  }

  componentDidMount() {
    axios.get(`api/areas/${this.props.match.params.id}/properties`)
      .then(response => {
        this.setState({ properties: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const propertyList = this.state.properties.map(u => (
      <Property
        key={u._id}
        id={u._id}
        name={u.name}
        size={u.size}
        bath = {u.bath}
        description = {u.description}
        image = {u.image}
        price = {u.price}
      />
    ));

    return (
      <Grid>
        <Row>
          {propertyList.length ?
            <div>
              <h2> All Properties in the Area</h2>
              <div>{propertyList}</div></div> :
            <h2>No Properties available</h2> }
        </Row>
      </Grid>
    );
  }
}

export default PropertyList;
