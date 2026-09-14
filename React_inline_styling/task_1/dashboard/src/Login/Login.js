import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  formElement: {
    margin: 8,
  },
});

function Login() {
  return (
    <React.Fragment>
      <p>Login to access the full dashboard</p>
      <label className={css(styles.formElement)} htmlFor="email">Email:</label>
      <input className={css(styles.formElement)} id="email" type="email" name="email" />
      <label className={css(styles.formElement)} htmlFor="password">Password:</label>
      <input className={css(styles.formElement)} id="password" type="password" name="password" />
      <button className={css(styles.formElement)} type="button">OK</button>
    </React.Fragment>
  );
}

export default Login;
