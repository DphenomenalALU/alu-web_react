import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import { NotificationTypeFilters } from '../actions/notificationActionTypes';

const styles = StyleSheet.create({
  menuItem: { backgroundColor: '#fff8f8', borderBottom: '1px solid #e0344b', color: '#222', cursor: 'pointer', float: 'right', padding: '12px 24px', position: 'fixed', right: 0, top: 0, zIndex: 20 },
  menuItemHidden: { display: 'none' }, notifications: { border: '1px solid #e0344b', padding: 12 },
});

export default function Notifications({ displayDrawer, handleDisplayDrawer, handleHideDrawer, listNotifications, markNotificationAsRead, setFilter }) {
  const menuItemClassName = displayDrawer ? css(styles.menuItem, styles.menuItemHidden) : css(styles.menuItem);
  const hasNotifications = listNotifications.length > 0;
  return <React.Fragment>
    <div className={`menuItem ${menuItemClassName}`} onClick={handleDisplayDrawer}>Your notifications</div>
    {displayDrawer && <div className={`Notifications ${css(styles.notifications)}`}>
      <button type="button" aria-label="Close" style={{ float: 'right' }} onClick={handleHideDrawer}><img src={closeIcon} alt="" /></button>
      {hasNotifications && <React.Fragment><p>Here is the list of notifications</p><button type="button" onClick={() => setFilter(NotificationTypeFilters.URGENT)}>‼️</button><button type="button" onClick={() => setFilter(NotificationTypeFilters.DEFAULT)}>💠</button></React.Fragment>}
      <ul>{hasNotifications ? listNotifications.map((notification) => <NotificationItem key={notification.id} {...notification} markAsRead={markNotificationAsRead} />) : <li>No new notification for now</li>}</ul>
    </div>}
  </React.Fragment>;
}

Notifications.propTypes = { displayDrawer: PropTypes.bool, handleDisplayDrawer: PropTypes.func, handleHideDrawer: PropTypes.func, listNotifications: PropTypes.array, markNotificationAsRead: PropTypes.func, setFilter: PropTypes.func };
Notifications.defaultProps = { displayDrawer: false, handleDisplayDrawer: () => {}, handleHideDrawer: () => {}, listNotifications: [], markNotificationAsRead: () => {}, setFilter: () => {} };
