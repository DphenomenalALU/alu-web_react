import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import logo from '../assets/holberton-logo.jpg';
import AppContext from '../App/AppContext';

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    borderBottom: '3px solid #e0344b',
    display: 'flex',
    padding: '16px 24px',
  },
  logo: {
    height: 160,
    objectFit: 'contain',
    width: 160,
  },
  title: {
    fontSize: 32,
    marginLeft: 16,
  },
  link: {
    cursor: 'pointer',
  },
});

class Header extends React.Component {
  render() {
    const { user, logOut } = this.context;

    return (
      <React.Fragment>
        <header className={`App-header ${css(styles.header)}`}>
          <img src={logo} className={`App-logo ${css(styles.logo)}`} alt="Holberton logo" />
          <h1 className={css(styles.title)}>School dashboard</h1>
        </header>
        {user.isLoggedIn && (
          <p id="logoutSection">
            Welcome <strong>{user.email}</strong> (
            <a href="#logout" onClick={logOut} className={css(styles.link)}>Log out</a>)
          </p>
        )}
      </React.Fragment>
    );
  }
}

Header.contextType = AppContext;

export default Header;
