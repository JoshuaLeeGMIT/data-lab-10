import React from 'react';
import '../App.css';

/* Content class that inherits from React.Component. */
export class Content extends React.Component {

  render() {
    return (
      <div className="App">
        <h1>Hello, world!</h1>
        /* JavaScript to display human-readable time. */
        <h3>{new Date().toLocaleTimeString()}</h3>
      </div>
    )
  }
}
