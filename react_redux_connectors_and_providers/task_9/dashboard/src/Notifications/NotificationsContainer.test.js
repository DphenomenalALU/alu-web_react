import React from 'react';
import { shallow } from 'enzyme';
import { NotificationsContainer } from './NotificationsContainer';

test('fetches notifications when mounted', () => {
  const fetchNotifications = jest.fn();
  shallow(<NotificationsContainer fetchNotifications={fetchNotifications} />);
  expect(fetchNotifications).toHaveBeenCalledTimes(1);
});
