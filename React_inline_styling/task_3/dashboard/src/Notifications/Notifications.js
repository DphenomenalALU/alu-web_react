import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';

const styles = StyleSheet.create({
  menuItem: {
    borderBottom: '1px solid #e0344b',
    color: '#222',
    cursor: 'pointer',
    padding: '12px 24px',
  },
  notifications: {
    border: '1px solid #e0344b',
    padding: 12,
    '@media (max-width: 900px)': {
      backgroundColor: '#fff',
      border: 0,
      bottom: 0,
      left: 0,
      padding: 0,
      position: 'fixed',
      right: 0,
      top: 0,
      width: '100%',
      zIndex: 10,
    },
  },
  notificationList: {
    '@media (max-width: 900px)': {
      fontSize: 20,
      margin: 0,
      padding: 0,
    },
  },
});

class Notifications extends React.Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.listNotifications.length
      > this.props.listNotifications.length;
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
        <div className={`menuItem ${css(styles.menuItem)}`}>Your notifications</div>
        {displayDrawer && (
          <div className={`Notifications ${css(styles.notifications)}`}>
            <button
              type="button"
              aria-label="Close"
              style={{ float: 'right' }}
              onClick={handleClose}
            >
              <img src={closeIcon} alt="" />
            </button>
            {hasNotifications && <p>Here is the list of notifications</p>}
            <ul className={css(styles.notificationList)}>
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
