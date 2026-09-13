import React from 'react';
import './App.css';
import logo from './react-intro-project-holberton-logo.jpg';
import { getFooterCopy, getFullYear } from './utils';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="Holberton logo" />
        <h1>School dashboard</h1>
      </header>
      <main className="App-body">
        <p>Login to access the full dashboard</p>
        <label htmlFor="email">Email:</label>
        <input id="email" type="email" name="email" />
        <label htmlFor="password">Password:</label>
        <input id="password" type="password" name="password" />
        <button type="button">OK</button>
      </main>
      <footer className="App-footer">
        <p>{`Copyright ${getFullYear()} - ${getFooterCopy(true)}`}</p>
      </footer>
    </div>
  );
}

export default App;
