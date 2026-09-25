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

  test('calls handleDisplayDrawer when the menu item is clicked', () => {
    const handleDisplayDrawer = jest.fn();
    const wrapper = shallow(<Notifications handleDisplayDrawer={handleDisplayDrawer} />);

    wrapper.find('.menuItem').simulate('click');
    expect(handleDisplayDrawer).toHaveBeenCalledTimes(1);
  });

  test('calls handleHideDrawer when the close button is clicked', () => {
    const handleHideDrawer = jest.fn();
    const wrapper = shallow(
      <Notifications displayDrawer handleHideDrawer={handleHideDrawer} />,
    );

    wrapper.find('button').simulate('click');
    expect(handleHideDrawer).toHaveBeenCalledTimes(1);
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

  test('does not rerender when the next list has the same length', () => {
    const wrapper = shallow(
      <Notifications displayDrawer listNotifications={notifications} />,
    );
    const renderSpy = jest.spyOn(Notifications.prototype, 'render');

    renderSpy.mockClear();
    try {
      wrapper.setProps({ listNotifications: [...notifications] });
      expect(renderSpy).not.toHaveBeenCalled();
    } finally {
      renderSpy.mockRestore();
    }
  });

  test('rerenders when the next list is longer', () => {
    const wrapper = shallow(
      <Notifications displayDrawer listNotifications={notifications} />,
    );
    const renderSpy = jest.spyOn(Notifications.prototype, 'render');

    renderSpy.mockClear();
    try {
      wrapper.setProps({
        listNotifications: [
          ...notifications,
          { id: 4, type: 'default', value: 'New project available' },
        ],
      });
      expect(renderSpy).toHaveBeenCalledTimes(1);
    } finally {
      renderSpy.mockRestore();
    }
  });
});

test('markAsRead logs the notification id', () => {
  const logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
  const wrapper = shallow(<Notifications />);

  try {
    wrapper.instance().markAsRead(7);
    expect(logSpy).toHaveBeenCalledWith('Notification 7 has been marked as read');
  } finally {
    logSpy.mockRestore();
  }
});
