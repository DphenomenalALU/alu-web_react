import React from 'react';
import './Notifications.css';
import closeIcon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils';

function Notifications() {
  const handleClose = () => console.log('Close button has been clicked');

  return (
    <div className="Notifications">
      <button
        type="button"
        aria-label="Close"
        style={{ float: 'right' }}
        onClick={handleClose}
      >
        <img src={closeIcon} alt="" />
      </button>
      <p>Here is the list of notifications</p>
      <ul>
        <li data-notification-type="default">New course available</li>
        <li data-notification-type="urgent">New resume available</li>
        <li dangerouslySetInnerHTML={{ __html: getLatestNotification() }} />
      </ul>
    </div>
  );
}

export default Notifications;
