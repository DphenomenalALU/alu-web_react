import React from 'react';

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
