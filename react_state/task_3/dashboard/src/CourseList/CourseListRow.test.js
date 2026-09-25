import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';

describe('CourseListRow headers', () => {
  test('renders one cell spanning two columns without a second value', () => {
    const wrapper = shallow(<CourseListRow isHeader textFirstCell="Available courses" />);

    expect(wrapper.find('th')).toHaveLength(1);
    expect(wrapper.find('th').prop('colSpan')).toBe(2);
  });

  test('renders two header cells with a second value', () => {
    const wrapper = shallow(
      <CourseListRow isHeader textFirstCell="Course name" textSecondCell="Credit" />,
    );

    expect(wrapper.find('th')).toHaveLength(2);
  });
});

test('renders two data cells in a table row', () => {
  const wrapper = shallow(
    <CourseListRow textFirstCell="ES6" textSecondCell="60" />,
  );

  expect(wrapper.find('tr')).toHaveLength(1);
  expect(wrapper.find('td')).toHaveLength(2);
});

test('applies a generated class to a default row', () => {
  const wrapper = shallow(
    <CourseListRow textFirstCell="ES6" textSecondCell="60" />,
  );

  expect(wrapper.find('tr').prop('className')).toEqual(expect.any(String));
});

test('applies a generated class to a header row', () => {
  const wrapper = shallow(
    <CourseListRow isHeader textFirstCell="Available courses" />,
  );

  expect(wrapper.find('tr').prop('className')).toEqual(expect.any(String));
});
