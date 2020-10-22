import React from 'react';
import '../App.css';

export class MovieItem extends React.Component {

  render() {
    return (
      <div className="App">
        <h4>{this.props.movie.Title}</h4>
        <h5>{this.props.movie.Year}</h5>
        <img src={this.props.movie.Poster} height="256"/>
      </div>
    )
  }
}
