import React from 'react';
import { createBrowserHistory } from 'history';
import ReactDOM from 'react-dom';
import styles from './../scss/index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import BasePage from './page/BasePage';
import { initialize } from './config/firebase'

console.log(styles);

const root = document.getElementById('root');
ReactDOM.render(<BasePage />, root);
initialize();
