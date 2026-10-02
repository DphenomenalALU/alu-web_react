import { Map, fromJS } from 'immutable';
import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from '../actions/courseActionTypes';
import { coursesNormalizer } from '../schema/courses';

export const initialState = Map();

export function courseReducer(state = initialState, action = {}) {
  switch (action.type) {
    case FETCH_COURSE_SUCCESS: {
      const courses = coursesNormalizer(action.data);
      const normalized = Object.keys(courses).reduce(
        (result, id) => result.set(id, fromJS({ ...courses[id], isSelected: false })),
        Map(),
      );
      return state.merge(normalized);
    }
    case SELECT_COURSE:
      return state.setIn([String(action.index), 'isSelected'], true);
    case UNSELECT_COURSE:
      return state.setIn([String(action.index), 'isSelected'], false);
    default:
      return state;
  }
}

export default courseReducer;
