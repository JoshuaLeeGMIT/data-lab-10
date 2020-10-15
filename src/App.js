import React from 'react';
import './App.css';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Hello, world!</h1>
          <h3>{new Date().toLocaleTimeString()}</h3>
        </header>
      </div>
    )
  }
}

export default App;
