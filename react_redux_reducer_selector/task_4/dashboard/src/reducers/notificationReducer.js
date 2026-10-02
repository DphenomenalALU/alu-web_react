import { Map, fromJS } from 'immutable';
import {
  FETCH_NOTIFICATIONS_SUCCESS,
  MARK_AS_READ,
  NotificationTypeFilters,
  SET_TYPE_FILTER,
} from '../actions/notificationActionTypes';
import { notificationsNormalizer } from '../schema/notifications';

export const initialState = Map({
  notifications: Map(),
  filter: NotificationTypeFilters.DEFAULT,
});

export function notificationReducer(state = initialState, action = {}) {
  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS: {
      const normalized = notificationsNormalizer(action.data);
      const notifications = Object.keys(normalized.notifications).reduce(
        (result, id) => result.set(
          id,
          fromJS({ ...normalized.notifications[id], isRead: false }),
        ),
        Map(),
      );
      return state.set('notifications', notifications);
    }
    case MARK_AS_READ:
      return state.setIn(['notifications', String(action.index), 'isRead'], true);
    case SET_TYPE_FILTER:
      return state.set('filter', action.filter);
    default:
      return state;
  }
}

export default notificationReducer;
