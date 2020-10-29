import React from 'react';
import { Movies } from './movies';
import '../App.css';

export class Read extends React.Component {
  /* Object's state. */
  state = {
    movies: []
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
