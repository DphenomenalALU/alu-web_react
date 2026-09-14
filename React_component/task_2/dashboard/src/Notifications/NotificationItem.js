import React from 'react';
import PropTypes from 'prop-types';

function NotificationItem({ id, type, html, value, markAsRead }) {
  return (
    <li
      data-notification-type={type}
      onClick={() => markAsRead(id)}
      {...(html ? { dangerouslySetInnerHTML: html } : {})}
    >
      {html ? null : value}
    </li>
  );
}

export default NotificationItem;

NotificationItem.propTypes = {
  id: PropTypes.number,
  html: PropTypes.shape({
    __html: PropTypes.string.isRequired,
  }),
  markAsRead: PropTypes.func,
  type: PropTypes.string,
  value: PropTypes.string,
};

NotificationItem.defaultProps = {
  id: 0,
  html: null,
  markAsRead: () => {},
  type: 'default',
  value: '',
};
