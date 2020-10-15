import React from 'react';
import './App.css';
import Content from './components/content';
import Header from './components/header';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Header></Header>
        <Content></Content>
      </div>
    )
  }
}

export default App;
