import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getFooterCopy, getFullYear } from '../utils';

export function mapStateToProps(state) {
  return { user: state.getIn(['ui', 'user']) };
}

export function Footer({ className, user }) {
  return (
    <footer className={className}>
      <p>{`Copyright ${getFullYear()} - ${getFooterCopy(true)}`}</p>
      {user && user.isLoggedIn && (
        <p><a href="mailto:contact@holbertonschool.com">Contact us</a></p>
      )}
    </footer>
  );
}

Footer.propTypes = { className: PropTypes.string, user: PropTypes.object };
Footer.defaultProps = { className: 'App-footer', user: null };

export default connect(mapStateToProps)(Footer);
