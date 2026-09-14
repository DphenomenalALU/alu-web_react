import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';

test('NotificationItem renders without crashing', () => {
  shallow(<NotificationItem type="default" value="test" />);
});

test('NotificationItem renders type and value', () => {
  const wrapper = shallow(<NotificationItem type="default" value="test" />);

  expect(wrapper.prop('data-notification-type')).toBe('default');
  expect(wrapper.text()).toBe('test');
});

test('NotificationItem renders HTML content', () => {
  const wrapper = shallow(
    <NotificationItem html={{ __html: '<u>test</u>' }} />,
  );

  expect(wrapper.prop('dangerouslySetInnerHTML')).toEqual({ __html: '<u>test</u>' });
});

test('NotificationItem defaults its type when it is omitted', () => {
  expect(shallow(<NotificationItem value="test" />).prop('data-notification-type'))
    .toBe('default');
});

test('NotificationItem calls markAsRead with its id when clicked', () => {
  const markAsRead = jest.fn();
  const wrapper = shallow(
    <NotificationItem id={7} value="test" markAsRead={markAsRead} />,
  );

  wrapper.simulate('click');

  expect(markAsRead).toHaveBeenCalledWith(7);
});
