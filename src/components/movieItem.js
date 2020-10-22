import React from 'react';
import Card from 'react-bootstrap/Card';
import '../App.css';

export class MovieItem extends React.Component {

  render() {
    return (
      <div className="App">
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={this.props.movie.Poster} />
          <Card.Body>
            <Card.Title>{this.props.movie.Title}</Card.Title>
            <Card.Text>{this.props.movie.Year}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    )
  }
}
