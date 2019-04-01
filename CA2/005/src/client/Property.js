import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Cell, Grid, Row} from '@material/react-layout-grid';
import Card, {
  CardPrimaryContent,
  CardMedia,
  CardActions,
  CardActionButtons,
  CardActionIcons
} from '@material/react-card';
import Button from '@material/react-button';
import MaterialIcon from '@material/react-material-icon';


class Property extends Component {

  render() {
    return (
      <Row>
        <Cell columns = {12} >
          <Card className = "PropCard" outlined>
            <CardPrimaryContent>
              <h1>{this.props.name}</h1>
              <CardMedia square imageUrl={this.props.image} />
            </CardPrimaryContent>
            <h5> {this.props.description} </h5>
            <CardActions>
              {this.props.bath}
              <br/>
              {this.props.size}
            </CardActions>
            <h2 className = "pricetag"> €{this.props.price}</h2>
          </Card>
        </Cell>
      </Row>
    );
  };

}
export default Property;
