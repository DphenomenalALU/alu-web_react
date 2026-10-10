import { bindActionCreators } from 'redux';
import { FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, SET_LOADING_STATE, SET_TYPE_FILTER } from './notificationActionTypes';

export function setLoadingState(loading) {
  return { type: SET_LOADING_STATE, loading };
}

export function setNotifications(data) {
  return { type: FETCH_NOTIFICATIONS_SUCCESS, data };
}

export function fetchNotifications() {
  return (dispatch) => {
    dispatch(setLoadingState(true));
    return fetch('/notifications.json')
      .then((response) => response.json())
      .then((data) => dispatch(setNotifications(data)))
      .finally(() => dispatch(setLoadingState(false)));
  };
}

export function markAsAread(index) {
  return {
    type: MARK_AS_READ,
    index,
  };
}

export const markAsARead = markAsAread;

export function setNotificationFilter(filter) {
  return {
    type: SET_TYPE_FILTER,
    filter,
  };
}

export const boundMarkAsAread = (dispatch) => bindActionCreators(markAsAread, dispatch);
export const boundMarkAsARead = boundMarkAsAread;
export const boundSetNotificationFilter = (dispatch) => (
  bindActionCreators(setNotificationFilter, dispatch)
);
export const boundmarkAsAread = boundMarkAsAread;
export const boundsetNotificationFilter = boundSetNotificationFilter;
