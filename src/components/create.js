import React from 'react';
import '../App.css';

export class Create extends React.Component {

  constructor() {
    super();

    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeYear = this.onChangeYear.bind(this);
    this.onChangePoster = this.onChangePoster.bind(this);

    this.state = {
      Title: "",
      Year: "",
      Poster: ""
    };
  }

  onChangePoster(e) {
    this.setState({
      Poster: e.target.value
    });
  }

  onChangeYear(e) {
    this.setState({
      Year: e.target.value
    });
  }

  onChangeTitle(e) {
    this.setState({
      Title: e.target.value
    });
  }

  onSubmit(event) {
    event.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <div className="App">
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Add movie name: </label>
            <input className="form-control" type="text" value={this.state.Title} onChange={this.onChangeTitle}></input>
            <label>Add movie year: </label>
            <input className="form-control" type="text" value={this.state.Year} onChange={this.onChangeYear}></input>
            <label>Add poster URL: </label>
            <input className="form-control" type="text" value={this.state.Poster} onChange={this.onChangePoster}></input>
            <input className="btn btn-primary" type="submit" value="Add movie"/>
          </div>
        </form>
      </div>
    )
  }
}
