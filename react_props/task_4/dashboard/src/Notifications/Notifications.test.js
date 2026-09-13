import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

test('Notifications renders the menu item when the drawer is closed', () => {
  const wrapper = shallow(<Notifications />);

  expect(wrapper.find('.menuItem')).toHaveLength(1);
  expect(wrapper.text()).toContain('Your notifications');
});

test('Notifications hides the drawer when displayDrawer is false', () => {
  expect(shallow(<Notifications />).find('.Notifications')).toHaveLength(0);
});

test('Notifications renders the menu item when the drawer is open', () => {
  expect(shallow(<Notifications displayDrawer />).find('.menuItem')).toHaveLength(1);
});

test('Notifications renders the drawer when displayDrawer is true', () => {
  const wrapper = shallow(<Notifications displayDrawer />);

  expect(wrapper.find('.Notifications')).toHaveLength(1);
  expect(wrapper.find(NotificationItem)).toHaveLength(3);
});
