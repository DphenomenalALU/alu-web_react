import React from 'react';
import { shallow } from 'enzyme';
import CourseList from './CourseList';
import CourseListRow from './CourseListRow';

describe('CourseList with no courses', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<CourseList listCourses={[]} />);
  });

  test('renders without crashing', () => {
    expect(wrapper.find('table#CourseList')).toHaveLength(1);
  });

  test('renders the empty state', () => {
    expect(wrapper.find(CourseListRow).last().prop('textFirstCell'))
      .toBe('No course available yet');
    expect(shallow(<CourseList />).find(CourseListRow).last().prop('textFirstCell'))
      .toBe('No course available yet');
  });
});

describe('CourseList with courses', () => {
  const courses = [
    { id: 1, name: 'ES6', credit: 60 },
    { id: 2, name: 'Webpack', credit: 20 },
    { id: 3, name: 'React', credit: 40 },
  ];
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<CourseList listCourses={courses} />);
  });

  test('renders a row for every course', () => {
    expect(wrapper.find(CourseListRow)).toHaveLength(5);
  });

  test('renders course names and credits', () => {
    expect(wrapper.find(CourseListRow).map((row) => row.props().textFirstCell))
      .toEqual(['Available courses', 'Course name', 'ES6', 'Webpack', 'React']);
    expect(wrapper.find(CourseListRow).map((row) => row.props().textSecondCell))
      .toEqual([null, 'Credit', 60, 20, 40]);
  });
});
