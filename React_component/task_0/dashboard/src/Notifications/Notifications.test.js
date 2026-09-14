import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

describe('Notifications with an empty list', () => {
  test('renders with an empty array or no list prop', () => {
    expect(shallow(<Notifications listNotifications={[]} />).find('.menuItem')).toHaveLength(1);
    expect(shallow(<Notifications />).find('.menuItem')).toHaveLength(1);
  });

  test('renders the empty message without the notification heading', () => {
    const wrapper = shallow(<Notifications displayDrawer listNotifications={[]} />);

    expect(wrapper.text()).toContain('No new notification for now');
    expect(wrapper.text()).not.toContain('Here is the list of notifications');
  });

  test('hides the drawer when displayDrawer is false', () => {
    expect(shallow(<Notifications />).find('.Notifications')).toHaveLength(0);
  });
});

describe('Notifications with a list', () => {
  const notifications = [
    { id: 1, type: 'default', value: 'New course available' },
    { id: 2, type: 'urgent', value: 'New resume available' },
    {
      id: 3,
      type: 'default',
      html: { __html: '<strong>Urgent requirement</strong> - complete by EOD' },
    },
  ];

  test('renders the menu item and drawer when displayDrawer is true', () => {
    const wrapper = shallow(
      <Notifications displayDrawer listNotifications={notifications} />,
    );

    expect(wrapper.find('.menuItem')).toHaveLength(1);
    expect(wrapper.find('.Notifications')).toHaveLength(1);
  });

  test('renders one NotificationItem for every notification', () => {
    expect(
      shallow(<Notifications displayDrawer listNotifications={notifications} />)
        .find(NotificationItem),
    ).toHaveLength(3);
  });

  test('renders the notification heading for a non-empty list', () => {
    expect(
      shallow(<Notifications displayDrawer listNotifications={notifications} />).text(),
    ).toContain('Here is the list of notifications');
  });
});
