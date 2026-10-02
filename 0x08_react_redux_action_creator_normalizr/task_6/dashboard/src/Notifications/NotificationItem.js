import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  defaultNotification: {
    color: 'blue',
  },
  urgentNotification: {
    color: 'red',
  },
});

function NotificationItem({ id, type, html, value, markAsRead }) {
  const notificationStyle = type === 'urgent'
    ? styles.urgentNotification
    : styles.defaultNotification;

  return (
    <li
      className={css(notificationStyle)}
      data-notification-type={type}
      onClick={() => markAsRead(id)}
      {...(html ? { dangerouslySetInnerHTML: html } : {})}
    >
      {html ? null : value}
    </li>
  );
}

export default React.memo(NotificationItem);

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
