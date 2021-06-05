import React from 'react';
import { createBrowserHistory } from 'history';
import ReactDOM from 'react-dom';
import styles from './../scss/index.scss';
import ffc from './../../assets/img/ffc.png';
import { Route, Router, Switch } from 'react-router';
import { HashRouter, Link } from 'react-router-dom';

const history = createBrowserHistory();
console.log(styles);

const App = () => {
  return (
    <div>
      <hr />
      <HashRouter>
        <ul>
          <li>
            <Link to="/">Inico</Link>
          </li>
          <li>
            <Link to="/about">Acerca</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path="/">
            <div>
                <h1>Familia Franciscana de colombia</h1>
                <img src={ffc} />
            </div>
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