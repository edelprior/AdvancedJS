import React from 'react';
import { Link } from 'react-router-dom';

class Lecturer extends React.Component {
  render() {
    return (
      <div>
        <div>
          {console.log(this.props)}
          <h3>{this.props.name}</h3>

          <Link to={`/module/${this.props.id}`}>
            <button type="button">
                  View modules taught
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Lecturer;
