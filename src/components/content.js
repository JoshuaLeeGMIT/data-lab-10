import React from 'react';
import '../App.css';

export class Content extends React.Component {

  render() {
    return (
      <div className="App">
        <h1>Hello, world!</h1>
        <h3>{new Date().toLocaleTimeString()}</h3>
      </div>
    )
  }
}
