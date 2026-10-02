import {
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  LOGOUT,
} from '../actions/uiActionTypes';

export const initialState = {
  isNotificationDrawerVisible: false,
  isUserLoggedIn: false,
  user: {},
};

export function uiReducer(state = initialState, action = {}) {
  switch (action.type) {
    case DISPLAY_NOTIFICATION_DRAWER:
      return { ...state, isNotificationDrawerVisible: true };
    case HIDE_NOTIFICATION_DRAWER:
      return { ...state, isNotificationDrawerVisible: false };
    case LOGIN_SUCCESS:
      return { ...state, isUserLoggedIn: true, user: action.user || {} };
    case LOGIN_FAILURE:
      return { ...state, isUserLoggedIn: false };
    case LOGOUT:
      return { ...state, isUserLoggedIn: false, user: {} };
    default:
      return state;
  }
}

export default uiReducer;
