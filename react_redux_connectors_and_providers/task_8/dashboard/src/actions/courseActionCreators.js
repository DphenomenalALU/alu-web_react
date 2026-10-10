import { bindActionCreators } from 'redux';
import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';

export function setCourses(data) {
  return { type: FETCH_COURSE_SUCCESS, data };
}

export function fetchCourses() {
  return (dispatch) => fetch('/courses.json')
    .then((response) => response.json())
    .then((data) => dispatch(setCourses(data)));
}

export function selectCourse(index) {
  return {
    type: SELECT_COURSE,
    index,
  };
}

export function unSelectCourse(index) {
  return {
    type: UNSELECT_COURSE,
    index,
  };
}

export const boundSelectCourse = (dispatch) => bindActionCreators(selectCourse, dispatch);
export const boundUnSelectCourse = (dispatch) => bindActionCreators(unSelectCourse, dispatch);
export const boundselectCourse = boundSelectCourse;
export const boundunSelectCourse = boundUnSelectCourse;
