import React from 'react';
import ReactDOM from 'react-dom';
import styles from './index.scss';
import ffc from './../assets/img/ffc.png';

const App = () => {
  return (
      <div>
        <h1>FFC</h1>
        <img src={ffc}/>
      </div>
    );
};
ReactDOM.render(<App />, document.getElementById('root'));