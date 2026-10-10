import { fromJS } from 'immutable';
import {
  FETCH_NOTIFICATIONS_SUCCESS,
  MARK_AS_READ,
} from '../actions/notificationActionTypes';
import notificationReducer from '../reducers/notificationReducer';
import {
  filterTypeSelected,
  getNotifications,
  getUnreadNotifications,
} from './notificationSelector';

const notifications = [
  { id: 1, type: 'default', value: 'New course available' },
  { id: 2, type: 'urgent', value: 'New resume available' },
];

describe('notification selectors', () => {
  it('selects the current filter and notifications', () => {
    const state = notificationReducer(undefined, { type: FETCH_NOTIFICATIONS_SUCCESS, data: notifications });
    expect(filterTypeSelected(state)).toBe('DEFAULT');
    expect(getNotifications(state).get('1').get('value')).toBe('New course available');
  });

  it('selects only unread notifications', () => {
    const state = notificationReducer(undefined, { type: FETCH_NOTIFICATIONS_SUCCESS, data: notifications });
    const readState = notificationReducer(state, { type: MARK_AS_READ, index: 2 });
    expect(getUnreadNotifications(readState).toJS()).toEqual([
      { id: 1, type: 'default', value: 'New course available', isRead: false },
    ]);
    expect(fromJS(getNotifications(readState).toJS()).size).toBe(2);
  });
});
