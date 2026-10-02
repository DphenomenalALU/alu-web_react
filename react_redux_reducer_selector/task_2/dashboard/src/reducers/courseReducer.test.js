import courseReducer, { initialState } from './courseReducer';
import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from '../actions/courseActionTypes';

const courses = [{ id: 1, name: 'ES6' }, { id: 2, name: 'Redux' }];

describe('courseReducer', () => {
  it('returns an empty array by default', () => {
    expect(courseReducer(undefined, {})).toEqual(initialState);
  });

  it('loads courses with isSelected set to false', () => {
    expect(courseReducer(undefined, { type: FETCH_COURSE_SUCCESS, data: courses })).toEqual([
      { id: 1, name: 'ES6', isSelected: false },
      { id: 2, name: 'Redux', isSelected: false },
    ]);
  });

  it('selects and unselects a course by id', () => {
    const loaded = courseReducer(undefined, { type: FETCH_COURSE_SUCCESS, data: courses });
    const selected = courseReducer(loaded, { type: SELECT_COURSE, index: 2 });
    expect(selected[1].isSelected).toBe(true);
    expect(courseReducer(selected, { type: UNSELECT_COURSE, index: 2 })[1].isSelected).toBe(false);
  });
});
