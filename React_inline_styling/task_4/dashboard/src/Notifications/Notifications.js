import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';

const fadeIn = {
  from: {
    opacity: 0.5,
  },
  to: {
    opacity: 1,
  },
};

const bounce = {
  '0%': {
    transform: 'translateY(0px)',
  },
  '50%': {
    transform: 'translateY(-5px)',
  },
  '100%': {
    transform: 'translateY(5px)',
  },
};

const styles = StyleSheet.create({
  menuItem: {
    backgroundColor: '#fff8f8',
    borderBottom: '1px solid #e0344b',
    color: '#222',
    cursor: 'pointer',
    float: 'right',
    padding: '12px 24px',
    position: 'fixed',
    right: 0,
    top: 0,
    zIndex: 20,
    ':hover': {
      animationName: [fadeIn, bounce],
      animationDuration: ['1s', '0.5s'],
      animationIterationCount: 3,
    },
  },
  menuItemHidden: {
    display: 'none',
  },
  notifications: {
    border: '1px solid #e0344b',
    padding: 12,
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
    const menuItemClassName = displayDrawer
      ? css(styles.menuItem, styles.menuItemHidden)
      : css(styles.menuItem);
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
        <div className={`menuItem ${menuItemClassName}`}>Your notifications</div>
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
