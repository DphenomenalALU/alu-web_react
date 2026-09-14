import React from 'react';
import PropTypes from 'prop-types';
import './Notifications.css';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';

class Notifications extends React.Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  render() {
    const { displayDrawer, listNotifications } = this.props;
    const handleClose = () => console.log('Close button has been clicked');
    const hasNotifications = listNotifications.length > 0;
    const notificationItems = hasNotifications
      ? listNotifications.map((notification) => (
        <NotificationItem
          key={notification.id}
          {...notification}
          markAsRead={this.markAsRead}
        />
      ))
      : <li>No new notification for now</li>;

    return (
      <React.Fragment>
        <div className="menuItem">Your notifications</div>
        {displayDrawer && (
          <div className="Notifications">
            <button
              type="button"
              aria-label="Close"
              style={{ float: 'right' }}
              onClick={handleClose}
            >
              <img src={closeIcon} alt="" />
            </button>
            {hasNotifications && <p>Here is the list of notifications</p>}
            <ul>
              {notificationItems}
            </ul>
          </div>
        )}
      </React.Fragment>
    );
  }
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(PropTypes.shape(NotificationItemShape)),
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};

export default Notifications;
