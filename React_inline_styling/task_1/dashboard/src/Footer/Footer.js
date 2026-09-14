import React from 'react';
import PropTypes from 'prop-types';
import { getFooterCopy, getFullYear } from '../utils';

function Footer({ className }) {
  return (
    <footer className={className}>
      <p>{`Copyright ${getFullYear()} - ${getFooterCopy(true)}`}</p>
    </footer>
  );
}

Footer.propTypes = {
  className: PropTypes.string,
};

Footer.defaultProps = {
  className: 'App-footer',
};

export default Footer;
