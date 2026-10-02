import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  formElement: {
    margin: 8,
  },
});

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      enableSubmit: false,
    };
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
  }

  handleLoginSubmit(event) {
    event.preventDefault();
    this.props.logIn(this.state.email, this.state.password);
  }

  handleChangeEmail(event) {
    const email = event.target.value;

    this.setState((state) => ({
      email,
      enableSubmit: email !== '' && state.password !== '',
    }));
  }

  handleChangePassword(event) {
    const password = event.target.value;

    this.setState((state) => ({
      password,
      enableSubmit: state.email !== '' && password !== '',
    }));
  }

  render() {
    const {
      email,
      password,
      enableSubmit,
    } = this.state;

    return (
      <React.Fragment>
        <p>Login to access the full dashboard</p>
        <form onSubmit={this.handleLoginSubmit}>
          <label className={css(styles.formElement)} htmlFor="email">Email:</label>
          <input
            className={css(styles.formElement)}
            id="email"
            type="email"
            name="email"
            value={email}
            onChange={this.handleChangeEmail}
          />
          <label className={css(styles.formElement)} htmlFor="password">Password:</label>
          <input
            className={css(styles.formElement)}
            id="password"
            type="password"
            name="password"
            value={password}
            onChange={this.handleChangePassword}
          />
          <input
            className={css(styles.formElement)}
            type="submit"
            value="OK"
            disabled={!enableSubmit}
          />
        </form>
      </React.Fragment>
    );
  }
}

Login.propTypes = {
  logIn: PropTypes.func,
};

Login.defaultProps = {
  logIn: () => {},
};

export default Login;
