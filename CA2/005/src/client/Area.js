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
class Areas extends Component {
  render() {
    return (
      <Grid>
        <Row>
          <Cell columns = {6}>
            <Card>
              <CardPrimaryContent>
                <h1>{this.props.name}</h1>
                <CardMedia square imageUrl={this.props.image} />
              </CardPrimaryContent>

              <CardActions>
                <CardActionButtons>
                  <Link className = "link" to={`/properties/${this.props.id}`}>
                    <Button outlined  type="button">
                      View Properties
                    </Button>
                  </Link>
                </CardActionButtons>
              </CardActions>
            </Card>
          </Cell>
        </Row>
      </Grid>

    );
  }
}

export default Areas;
