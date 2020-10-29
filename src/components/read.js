import axios from 'axios';
import React from 'react';
import { Movies } from './movies';
import '../App.css';

export class Read extends React.Component {
  /* Object's state. */
  state = {
    movies: []
  }

  componentDidMount() {
    axios.get("https://jsonblob.com/api/jsonblob/520c3b5e-0312-11eb-a6af-cbf00d776032")
      .then(
        (response) => {
          this.setState({movies: response.data.Search})
        }
      )
      .catch(
        (e) => {
          console.log(e);
        }
      );
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
