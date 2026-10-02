import {
  displayNotificationDrawer,
  hideNotificationDrawer,
  login,
  logout,
} from './uiActionCreators';
import {
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN,
  LOGOUT,
} from './uiActionTypes';

test('login creates a LOGIN action with the user', () => {
  expect(login('user@example.com', 'password')).toEqual({
    type: LOGIN,
    user: { email: 'user@example.com', password: 'password' },
  });
});

test('logout creates a LOGOUT action', () => {
  expect(logout()).toEqual({ type: LOGOUT });
});

test('displayNotificationDrawer creates the display action', () => {
  expect(displayNotificationDrawer()).toEqual({ type: DISPLAY_NOTIFICATION_DRAWER });
});

test('hideNotificationDrawer creates the hide action', () => {
  expect(hideNotificationDrawer()).toEqual({ type: HIDE_NOTIFICATION_DRAWER });
});
