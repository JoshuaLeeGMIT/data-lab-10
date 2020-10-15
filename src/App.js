import React from 'react';
import './App.css';
import Header from './components/header';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Header></Header>
        <header className="App-header">
          <h1>Hello, world!</h1>
          <h3>{new Date().toLocaleTimeString()}</h3>
        </header>
      </div>
    )
  }
}

export default App;
