import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';

test('App renders without crashing', () => {
  shallow(<App />);
});

test('App does not display CourseList when logged out', () => {
  expect(shallow(<App />).find(CourseList)).toHaveLength(0);
});

describe('when the user is logged in', () => {
  const wrapper = shallow(<App isLoggedIn />);

  test('does not display Login', () => {
    expect(wrapper.find(Login)).toHaveLength(0);
  });

  test('displays CourseList', () => {
    expect(wrapper.find(CourseList)).toHaveLength(1);
  });
});
