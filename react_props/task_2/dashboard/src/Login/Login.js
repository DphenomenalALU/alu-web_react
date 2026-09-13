import React from 'react';
import './Login.css';

function Login() {
  return (
    <React.Fragment>
      <p>Login to access the full dashboard</p>
      <label htmlFor="email">Email:</label>
      <input id="email" type="email" name="email" />
      <label htmlFor="password">Password:</label>
      <input id="password" type="password" name="password" />
      <button type="button">OK</button>
    </React.Fragment>
  );
}

export default Login;
