import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { StyleSheet, css } from 'aphrodite';
import logo from '../assets/holberton-logo.jpg';
import { logout } from '../actions/uiActionCreators';

const styles = StyleSheet.create({
  header: { alignItems: 'center', borderBottom: '3px solid #e0344b', display: 'flex', padding: '16px 24px' },
  logo: { height: 160, objectFit: 'contain', width: 160 },
  title: { fontSize: 32, marginLeft: 16 },
  link: { cursor: 'pointer' },
});

export function mapStateToProps(state) { return { user: state.getIn(['ui', 'user']) }; }

export function Header({ user, logOut }) {
  return (
    <React.Fragment>
      <header className={`App-header ${css(styles.header)}`}>
        <img src={logo} className={`App-logo ${css(styles.logo)}`} alt="Holberton logo" />
        <h1 className={css(styles.title)}>School dashboard</h1>
      </header>
      {user && user.isLoggedIn && (
        <p id="logoutSection">Welcome <strong>{user.email}</strong> (
          <a href="#logout" onClick={logOut} className={css(styles.link)}>Log out</a>)
        </p>
      )}
    </React.Fragment>
  );
}

Header.propTypes = { user: PropTypes.object, logOut: PropTypes.func };
Header.defaultProps = { user: null, logOut: () => {} };

export default connect(mapStateToProps, { logOut: logout })(Header);
