import React from 'react';
import PropTypes from 'prop-types';

function NotificationItem({ type, html, value }) {
  return (
    <li
      data-notification-type={type}
      {...(html ? { dangerouslySetInnerHTML: html } : {})}
    >
      {html ? null : value}
    </li>
  );
}

export default NotificationItem;

NotificationItem.propTypes = {
  html: PropTypes.shape({
    __html: PropTypes.string.isRequired,
  }),
  type: PropTypes.string,
  value: PropTypes.string,
};

NotificationItem.defaultProps = {
  html: null,
  type: 'default',
  value: '',
};
