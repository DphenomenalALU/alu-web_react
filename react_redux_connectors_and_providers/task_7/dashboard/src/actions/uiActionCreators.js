import { bindActionCreators } from 'redux';
import {
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  LOGOUT,
} from './uiActionTypes';

export function login(email, password) {
  return {
    type: LOGIN,
    user: { email, password },
  };
}

export function logout() {
  return { type: LOGOUT };
}

export function displayNotificationDrawer() {
  return { type: DISPLAY_NOTIFICATION_DRAWER };
}

export function hideNotificationDrawer() {
  return { type: HIDE_NOTIFICATION_DRAWER };
}

export function loginSuccess() {
  return { type: LOGIN_SUCCESS };
}

export function loginFailure() {
  return { type: LOGIN_FAILURE };
}

export function loginRequest(email, password) {
  return (dispatch) => {
    dispatch(login(email, password));

    return fetch('/login-success.json')
      .then((response) => response.json())
      .then(() => dispatch(loginSuccess()))
      .catch(() => dispatch(loginFailure()));
  };
}

export const boundLogin = (dispatch) => bindActionCreators(login, dispatch);
export const boundLogout = (dispatch) => bindActionCreators(logout, dispatch);
export const boundDisplayNotificationDrawer = (dispatch) => (
  bindActionCreators(displayNotificationDrawer, dispatch)
);
export const boundHideNotificationDrawer = (dispatch) => (
  bindActionCreators(hideNotificationDrawer, dispatch)
);
export const boundlogin = boundLogin;
export const boundlogout = boundLogout;
export const bounddisplayNotificationDrawer = boundDisplayNotificationDrawer;
export const boundhideNotificationDrawer = boundHideNotificationDrawer;
