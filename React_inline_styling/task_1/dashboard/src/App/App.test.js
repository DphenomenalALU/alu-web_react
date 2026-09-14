import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';

test('App renders without crashing', () => {
  shallow(<App />);
});

test('App does not display CourseList when logged out', () => {
  expect(shallow(<App />).find(CourseList)).toHaveLength(0);
});

test('logs out when control and h are pressed together', () => {
  const originalAlert = window.alert;
  const alertMock = jest.fn();
  const logOut = jest.fn();

  window.alert = alertMock;
  const wrapper = shallow(<App logOut={logOut} />);
  try {
    wrapper.instance().handleKeyDown({
      key: 'h',
      ctrlKey: true,
    });

    expect(alertMock).toHaveBeenCalledWith('Logging you out');
    expect(logOut).toHaveBeenCalledTimes(1);
  } finally {
    wrapper.unmount();
    window.alert = originalAlert;
  }
});

describe('when the user is logged in', () => {
  const wrapper = shallow(<App isLoggedIn />);

  test('does not display Login', () => {
    expect(wrapper.find(Login)).toHaveLength(0);
  });

  test('displays CourseList inside the Course list section', () => {
    const section = wrapper.find(BodySectionWithMarginBottom);

    expect(section).toHaveLength(1);
    expect(section.prop('title')).toBe('Course list');
    expect(section.prop('children').type).toBe(CourseList);
  });
});
