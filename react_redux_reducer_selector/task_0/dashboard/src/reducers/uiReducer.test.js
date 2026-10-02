import uiReducer, { initialState } from './uiReducer';
import {
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  LOGOUT,
} from '../actions/uiActionTypes';

describe('uiReducer', () => {
  it('returns the initial state', () => {
    expect(uiReducer(undefined, {})).toEqual(initialState);
  });

  it('shows and hides the notification drawer', () => {
    const shown = uiReducer(undefined, { type: DISPLAY_NOTIFICATION_DRAWER });
    expect(shown.isNotificationDrawerVisible).toBe(true);
    expect(uiReducer(shown, { type: HIDE_NOTIFICATION_DRAWER }).isNotificationDrawerVisible).toBe(false);
  });

  it('handles login success and failure', () => {
    const user = { id: 1, email: 'student@example.com' };
    const loggedIn = uiReducer(undefined, { type: LOGIN_SUCCESS, user });
    expect(loggedIn).toEqual({ ...initialState, isUserLoggedIn: true, user });
    expect(uiReducer(loggedIn, { type: LOGIN_FAILURE }).isUserLoggedIn).toBe(false);
  });

  it('logs out and clears the user', () => {
    const state = { ...initialState, isUserLoggedIn: true, user: { id: 1 } };
    expect(uiReducer(state, { type: LOGOUT })).toEqual(initialState);
  });
});
