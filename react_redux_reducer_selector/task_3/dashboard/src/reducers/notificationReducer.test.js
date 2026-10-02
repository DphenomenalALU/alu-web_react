import notificationReducer, { initialState } from './notificationReducer';
import {
  FETCH_NOTIFICATIONS_SUCCESS,
  MARK_AS_READ,
  NotificationTypeFilters,
  SET_TYPE_FILTER,
} from '../actions/notificationActionTypes';

const notifications = [
  { id: 1, type: 'default', value: 'New course available' },
  { id: 2, type: 'urgent', value: 'New resume available' },
];

describe('notificationReducer', () => {
  it('returns the default notification state', () => {
    expect(notificationReducer(undefined, {})).toEqual(initialState);
  });

  it('loads notifications as unread', () => {
    expect(notificationReducer(undefined, {
      type: FETCH_NOTIFICATIONS_SUCCESS,
      data: notifications,
    }).notifications).toEqual([
      { ...notifications[0], isRead: false },
      { ...notifications[1], isRead: false },
    ]);
  });

  it('marks one notification as read and changes the filter', () => {
    const loaded = notificationReducer(undefined, { type: FETCH_NOTIFICATIONS_SUCCESS, data: notifications });
    const read = notificationReducer(loaded, { type: MARK_AS_READ, index: 2 });
    expect(read.notifications[1].isRead).toBe(true);
    expect(notificationReducer(read, {
      type: SET_TYPE_FILTER,
      filter: NotificationTypeFilters.URGENT,
    }).filter).toBe('URGENT');
  });
});
