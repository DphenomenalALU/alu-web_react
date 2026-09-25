import React from 'react';
import PropTypes from 'prop-types';
import { getFooterCopy, getFullYear } from '../utils';
import AppContext from '../App/AppContext';

function Footer({ className }) {
  return (
    <AppContext.Consumer>
      {({ user }) => (
        <footer className={className}>
          <p>{`Copyright ${getFullYear()} - ${getFooterCopy(true)}`}</p>
          {user.isLoggedIn && (
            <p><a href="mailto:contact@holbertonschool.com">Contact us</a></p>
          )}
        </footer>
      )}
    </AppContext.Consumer>
  );
}

Footer.propTypes = {
  className: PropTypes.string,
};

Footer.defaultProps = {
  className: 'App-footer',
};

export default Footer;
