import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';

test('Notifications renders without crashing', () => {
  shallow(<Notifications />);
});

test('Notifications renders three list items', () => {
  expect(shallow(<Notifications />).find('li')).toHaveLength(3);
});

test('Notifications renders the notification heading', () => {
  expect(shallow(<Notifications />).text()).toContain('Here is the list of notifications');
});
