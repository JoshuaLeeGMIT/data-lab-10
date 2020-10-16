/* react-boostrap recommends importing individual components instead of the
 * entire library. See:
 *
 * https://react-bootstrap.netlify.app/getting-started/introduction/
 */

 /* Default imports. */
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';

/* Named imports. */
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Header } from './components/header';
import { Content } from './components/content';
import { Footer } from './components/footer';

/* CSS imports. */
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {

  render() {
    return (
      <>
        <BrowserRouter>
          <div className="App">
            <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="/">Lab 2</Navbar.Brand>
              <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/read">Read</Nav.Link>
                <Nav.Link href="/create">Create</Nav.Link>
              </Nav>
            </Navbar>
            <Switch>
              <Route exact path="/" component={Header}/>
              <Route exact path="/read" component={Content}/>
              <Route exact path="/create" component={Footer}/>
            </Switch>
          </div>
        </BrowserRouter>
      </>
    )
  }
}

export default App;
