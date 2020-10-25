import React from 'react';
/* Import the necessary Bootstrap item. */
import Card from 'react-bootstrap/Card';
import '../App.css';

export class MovieItem extends React.Component {

  render() {
    return (
      <div className="App">
        {/* Card from Bootstrap. */}
        <Card style={{ width: '18rem' }}>
          {/* Access the movie poster through the passed in object. */}
          <Card.Img variant="top" src={this.props.movie.Poster} />
          <Card.Body>
            {/* Access the attributes of the passed in movie object. */}
            <Card.Title>{this.props.movie.Title}</Card.Title>
            <Card.Text>{this.props.movie.Year}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    )
  }
}
