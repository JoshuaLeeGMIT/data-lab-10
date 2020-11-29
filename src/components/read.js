import axios from 'axios';
import React from 'react';
import { Movies } from './movies';
import '../App.css';

export class Read extends React.Component {
  /* Object's state. */
  state = {
    movies: []
  }

  constructor() {
    super();
    this.reloadPage = this.reloadPage.bind(this);
  }

  reloadPage() {
    axios.get("http://localhost:4000/api/movies").then((response) => {
      this.setState({movies: response.data.movies})
    }).catch((e) => {
      console.log(e);
    });
  }

  /* Implement lifecycle hook. */
  componentDidMount() {
    /* Make a GET request to fill object's state. */
    axios.get("http://localhost:4000/api/movies").then((response) => {
      this.setState({movies: response.data})
    }).catch((e) => {
      console.log(e);
    });
  }

  render() {
    return (
      <div className="App">
        {/* Pass the state to movies.js */}
        <Movies movies={this.state.movies}></Movies>
      </div>
    )
  }
}
