import React from 'react';
import { Link } from 'react-router-dom'
import Msg from '../../containers/Msg'
import logo from '../../logo.svg';
import './Demo.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>
            <Link className="App-link" to='/test'>Test 页</Link>
        </p>
        <Msg />
      </header>
    </div>
  );
}

export default App;
