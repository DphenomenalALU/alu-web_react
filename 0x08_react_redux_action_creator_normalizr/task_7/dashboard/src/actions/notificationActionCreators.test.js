import { markAsAread, setNotificationFilter } from './notificationActionCreators';
import {
  MARK_AS_READ,
  NotificationTypeFilters,
  SET_TYPE_FILTER,
} from './notificationActionTypes';

test('markAsAread creates a MARK_AS_READ action', () => {
  expect(markAsAread(1)).toEqual({ type: MARK_AS_READ, index: 1 });
});

test('setNotificationFilter creates a SET_TYPE_FILTER action', () => {
  expect(setNotificationFilter(NotificationTypeFilters.DEFAULT)).toEqual({
    type: SET_TYPE_FILTER,
    filter: 'DEFAULT',
  });
});
