import React from 'react';
import './Notifications.css';
import closeIcon from './close-icon.png';
import { getLatestNotification } from './utils';

export default function Notifications() {
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
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li dangerouslySetInnerHTML={{ __html: getLatestNotification() }} />
      </ul>
    </div>
  );
}
