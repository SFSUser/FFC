import React from 'react';
import { createBrowserHistory } from 'history';
import ReactDOM from 'react-dom';
import styles from './../scss/index.scss';
import { Route, Router, Switch } from 'react-router';
import { HashRouter, Link } from 'react-router-dom';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import HomePage from './page/HomePage';
const history = createBrowserHistory();
console.log(styles);
const App = () => {
  return (
    <div className="fixer">
      <HashRouter>
        <Navbar bg="light" variant="light">
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="mr-auto">
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/features">Features</Link>
            <Link className="nav-link" to="/pricing">Pricing</Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-light">Search</Button>
          </Form>
        </Navbar>
        <Switch>
          <Route exact path="/">
            <HomePage/>
          </Route>
          <Route path="/about">
            <div></div>
          </Route>
          <Route path="/dashboard">
            <div></div>
          </Route>
        </Switch>
      </HashRouter>
    </div>
  );
}
ReactDOM.render(<App />, document.getElementById('root'));