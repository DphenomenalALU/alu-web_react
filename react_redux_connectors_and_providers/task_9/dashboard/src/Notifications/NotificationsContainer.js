import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Notifications from './Notifications';
import { fetchNotifications, markAsAread, setNotificationFilter } from '../actions/notificationActionCreators';
import { getUnreadNotificationsByType } from '../selectors/notificationSelector';

export class NotificationsContainer extends React.Component {
  componentDidMount() { this.props.fetchNotifications(); }

  render() { return <Notifications {...this.props} />; }
}

NotificationsContainer.propTypes = { fetchNotifications: PropTypes.func };
NotificationsContainer.defaultProps = { fetchNotifications: () => {} };

export function mapStateToProps(state) {
  return {
    listNotifications: getUnreadNotificationsByType(state.get('notifications')).map((item) => item.toJS()).toArray(),
  };
}

export default connect(mapStateToProps, { fetchNotifications, markNotificationAsRead: markAsAread, setFilter: setNotificationFilter })(NotificationsContainer);
