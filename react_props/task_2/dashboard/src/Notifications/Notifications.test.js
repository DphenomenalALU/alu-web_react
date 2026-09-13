import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

test('Notifications renders without crashing', () => {
  shallow(<Notifications />);
});

test('Notifications renders three NotificationItem components', () => {
  expect(shallow(<Notifications />).find(NotificationItem)).toHaveLength(3);
});

test('the first NotificationItem receives the expected props', () => {
  const firstItem = shallow(<Notifications />).find(NotificationItem).at(0);

  expect(firstItem.prop('type')).toBe('default');
  expect(firstItem.prop('value')).toBe('New course available');
});

test('Notifications renders the notification heading', () => {
  expect(shallow(<Notifications />).text()).toContain('Here is the list of notifications');
});
