import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { StyleSheet, css } from 'aphrodite';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import { fetchNotifications, markAsAread } from '../actions/notificationActionCreators';
import { getUnreadNotifications } from '../selectors/notificationSelector';

const styles = StyleSheet.create({
  menuItem: { backgroundColor: '#fff8f8', borderBottom: '1px solid #e0344b', color: '#222', cursor: 'pointer', float: 'right', padding: '12px 24px', position: 'fixed', right: 0, top: 0, zIndex: 20 },
  menuItemHidden: { display: 'none' },
  notifications: { border: '1px solid #e0344b', padding: 12 },
});

export class Notifications extends React.PureComponent {
  componentDidMount() { this.props.fetchNotifications(); }

  render() {
    const { displayDrawer, handleDisplayDrawer, handleHideDrawer, listNotifications, markNotificationAsRead } = this.props;
    const menuItemClassName = displayDrawer ? css(styles.menuItem, styles.menuItemHidden) : css(styles.menuItem);
    const hasNotifications = listNotifications.length > 0;
    return (
      <React.Fragment>
        <div className={`menuItem ${menuItemClassName}`} onClick={handleDisplayDrawer}>Your notifications</div>
        {displayDrawer && (
          <div className={`Notifications ${css(styles.notifications)}`}>
            <button type="button" aria-label="Close" style={{ float: 'right' }} onClick={handleHideDrawer}>
              <img src={closeIcon} alt="" />
            </button>
            {hasNotifications && <p>Here is the list of notifications</p>}
            <ul>{hasNotifications ? listNotifications.map((notification) => (
              <NotificationItem key={notification.id} {...notification} markAsRead={markNotificationAsRead} />
            )) : <li>No new notification for now</li>}</ul>
          </div>
        )}
      </React.Fragment>
    );
  }
}

Notifications.propTypes = { displayDrawer: PropTypes.bool, handleDisplayDrawer: PropTypes.func, handleHideDrawer: PropTypes.func, listNotifications: PropTypes.array, fetchNotifications: PropTypes.func, markNotificationAsRead: PropTypes.func };
Notifications.defaultProps = { displayDrawer: false, handleDisplayDrawer: () => {}, handleHideDrawer: () => {}, listNotifications: [], fetchNotifications: () => {}, markNotificationAsRead: () => {} };

export function mapStateToProps(state) {
  return { listNotifications: getUnreadNotifications(state.get('notifications')).map((item) => item.toJS()).toArray() };
}

export default connect(mapStateToProps, { fetchNotifications, markNotificationAsRead: markAsAread })(Notifications);
