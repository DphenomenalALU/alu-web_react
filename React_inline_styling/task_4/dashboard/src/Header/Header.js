import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import logo from '../assets/holberton-logo.jpg';

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
});

function Header() {
  return (
    <header className={`App-header ${css(styles.header)}`}>
      <img src={logo} className={`App-logo ${css(styles.logo)}`} alt="Holberton logo" />
      <h1 className={css(styles.title)}>School dashboard</h1>
    </header>
  );
}

export default Header;
