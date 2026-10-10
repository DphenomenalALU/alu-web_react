import { Map } from 'immutable';
import courseReducer from './courseReducer';
import notificationReducer from './notificationReducer';
import { FETCH_COURSE_SUCCESS, SELECT_COURSE } from '../actions/courseActionTypes';
import { FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ } from '../actions/notificationActionTypes';

describe('normalized immutable reducers', () => {
  it('stores courses in an immutable map', () => {
    const state = courseReducer(undefined, {
      type: FETCH_COURSE_SUCCESS,
      data: [{ id: 1, name: 'ES6' }],
    });
    expect(Map.isMap(state)).toBe(true);
    expect(state.getIn(['1', 'isSelected'])).toBe(false);
    expect(courseReducer(state, { type: SELECT_COURSE, index: 1 }).getIn(['1', 'isSelected'])).toBe(true);
  });

  it('stores notifications in an immutable map', () => {
    const state = notificationReducer(undefined, {
      type: FETCH_NOTIFICATIONS_SUCCESS,
      data: [{ id: 1, type: 'default', value: 'Hello' }],
    });
    expect(Map.isMap(state)).toBe(true);
    expect(state.getIn(['notifications', '1', 'isRead'])).toBe(false);
    expect(notificationReducer(state, { type: MARK_AS_READ, index: 1 })
      .getIn(['notifications', '1', 'isRead'])).toBe(true);
  });
});
