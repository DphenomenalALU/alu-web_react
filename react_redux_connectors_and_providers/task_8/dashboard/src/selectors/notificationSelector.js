import { createSelector } from 'reselect';
import { NotificationTypeFilters } from '../actions/notificationActionTypes';

export const filterTypeSelected = (state) => state.get('filter');
export const getNotifications = (state) => state.get('notifications');

export const getUnreadNotificationsByType = createSelector(
  [filterTypeSelected, getNotifications],
  (filter, notifications) => notifications.valueSeq()
    .filter((notification) => !notification.get('isRead')
      && (filter === NotificationTypeFilters.DEFAULT || notification.get('type') === filter.toLowerCase()))
    .toList(),
);

export default { filterTypeSelected, getNotifications, getUnreadNotificationsByType };
