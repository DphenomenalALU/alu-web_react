import { Map } from 'immutable';
import uiReducer, { initialState } from './uiReducer';
import { DISPLAY_NOTIFICATION_DRAWER, LOGIN_SUCCESS, LOGOUT } from '../actions/uiActionTypes';

describe('immutable uiReducer', () => {
  it('uses an immutable map as the initial state', () => {
    expect(Map.isMap(uiReducer(undefined, {}))).toBe(true);
    expect(uiReducer(undefined, {})).toEqual(initialState);
  });

  it('updates state with immutable Map.set operations', () => {
    const shown = uiReducer(undefined, { type: DISPLAY_NOTIFICATION_DRAWER });
    expect(shown.get('isNotificationDrawerVisible')).toBe(true);
    const loggedIn = uiReducer(shown, { type: LOGIN_SUCCESS, user: { id: 1 } });
    expect(loggedIn.get('isUserLoggedIn')).toBe(true);
    expect(uiReducer(loggedIn, { type: LOGOUT }).toJS()).toEqual(initialState.toJS());
  });
});
