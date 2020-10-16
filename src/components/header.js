import React from 'react';
import '../App.css';

/* Header class that inherits from React.Component. */
export class Header extends React.Component {

  render() {
    return (
      <div className="App">
        <h1>My header in another component</h1>
      </div>
    )
  }
}
