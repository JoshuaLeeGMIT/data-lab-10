import axios from 'axios';
import React from 'react';
import '../App.css';

export class Edit extends React.Component {

  constructor() {
    /* Call React.Component constructor. */
    super();

    /* Bind handlers. */
    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeYear = this.onChangeYear.bind(this);
    this.onChangePoster = this.onChangePoster.bind(this);

    /* Initialise state. */
    this.state = {
      Title: "",
      Year: "",
      Poster: ""
    };
  }

  /* Lifecycle hook. */
  componentDidMount() {
    axios.get('https://localhost:4000/apis/movies/' + this.props.match.params.id).then(response => {
      this.setState({
        _id: response.data._id,
        Title: response.data.title,
        Year: response.data.year,
        Poster: response.data.poster
      })
    }).catch((e) => {
      console.log(e);
    })
  }

  /* Handle form changes, setting the appropriate state field. */
  onChangePoster(e) {
    this.setState({
      Poster: e.target.value
    });
  }

  /* Ditto. */
  onChangeYear(e) {
    this.setState({
      Year: e.target.value
    });
  }

  /* Ditto. */
  onChangeTitle(e) {
    this.setState({
      Title: e.target.value
    });
  }

  onSubmit(event) {
    /* Create object from state to send to server. */
    let data = {
      title: this.state.Title,
      year: this.state.Year,
      poster: this.state.Poster
    };

    event.preventDefault();

    /* Make POST request to server. */
    axios.post('http://localhost:4000/api/movies', data).then((res) => {
      console.log(res);
    })
    .catch((e) => {
      console.log(e);
    });
  }

  render() {
    return (
      <div className="App">
        {/* Bind form to handler. */}
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Add movie name: </label>
            {/* Ensure on change handler is set for inputs. */}
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
