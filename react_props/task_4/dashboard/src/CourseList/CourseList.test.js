import React from 'react';
import { shallow } from 'enzyme';
import CourseList from './CourseList';
import CourseListRow from './CourseListRow';

test('CourseList renders without crashing', () => {
  shallow(<CourseList />);
});

test('CourseList renders five different rows', () => {
  expect(shallow(<CourseList />).find(CourseListRow)).toHaveLength(5);
});
