import axios from 'axios';
import React from 'react';
/* Import the necessary Bootstrap item. */
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../App.css';
import { Link } from 'react-router-dom';

export class MovieItem extends React.Component {

  constructor() {
    super();
    this.deleteMovie = this.deleteMovie.bind(this);
  }

  deleteMovie(e) {
    e.preventDefault();

    /* After a movie item is deleted, reload the page. */
    axios.delete('http://localhost:4000/api/movies/' + this.props.movies._id).then(() => {
      this.props.reloadPage();
    }).catch();
  }

  render() {
    return (
      <div className="App">
        {/* Card from Bootstrap. */}
        <Card style={{ width: '18rem' }}>
          {/* Access the movie poster through the passed in object. */}
          <Card.Img variant="top" src={this.props.movie.poster} />
          <Card.Body>
            {/* Access the attributes of the passed in movie object. */}
            <Card.Title>{this.props.movie.title}</Card.Title>
            <Card.Text>{this.props.movie.year}</Card.Text>
          </Card.Body>
          <Link to={"/edit" + this.props.movie._id} className="btn btn-primary">Edit</Link>
          {/* Create button and hook it up to delete function */}
          <Button variant="danger" onClick={this.deleteMovie}>Delete</Button>
        </Card>
      </div>
    )
  }
}
