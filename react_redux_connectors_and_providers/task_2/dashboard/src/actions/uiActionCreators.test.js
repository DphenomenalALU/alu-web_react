import {
  displayNotificationDrawer,
  hideNotificationDrawer,
  login,
  loginFailure,
  loginRequest,
  loginSuccess,
  logout,
} from './uiActionCreators';
import {
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
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

test('loginSuccess creates a LOGIN_SUCCESS action', () => {
  expect(loginSuccess()).toEqual({ type: LOGIN_SUCCESS });
});

test('loginFailure creates a LOGIN_FAILURE action', () => {
  expect(loginFailure()).toEqual({ type: LOGIN_FAILURE });
});

test('loginRequest dispatches LOGIN and LOGIN_SUCCESS on success', async () => {
  const dispatch = jest.fn();
  global.fetch = jest.fn(() => Promise.resolve({
    ok: true,
    json: () => Promise.resolve({}),
  }));

  await loginRequest('user@example.com', 'password')(dispatch);

  expect(dispatch.mock.calls.map((call) => call[0])).toEqual([
    login('user@example.com', 'password'),
    loginSuccess(),
  ]);
});

test('loginRequest dispatches LOGIN and LOGIN_FAILURE on failure', async () => {
  const dispatch = jest.fn();
  global.fetch = jest.fn(() => Promise.reject(new Error('Network error')));

  await loginRequest('user@example.com', 'password')(dispatch);

  expect(dispatch.mock.calls.map((call) => call[0])).toEqual([
    login('user@example.com', 'password'),
    loginFailure(),
  ]);
});
