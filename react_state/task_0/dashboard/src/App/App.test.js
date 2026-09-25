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

test('drawer is hidden by default and can be displayed', () => {
  const wrapper = shallow(<App />);

  expect(wrapper.state('displayDrawer')).toBe(false);
  wrapper.instance().handleDisplayDrawer();
  expect(wrapper.state('displayDrawer')).toBe(true);
});

test('handleHideDrawer hides the notifications drawer', () => {
  const wrapper = shallow(<App />);

  wrapper.instance().handleDisplayDrawer();
  wrapper.instance().handleHideDrawer();
  expect(wrapper.state('displayDrawer')).toBe(false);
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
