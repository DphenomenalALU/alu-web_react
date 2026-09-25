import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';

test('Login renders without crashing', () => {
  shallow(<Login />);
});

test('Login renders two inputs and two labels', () => {
  const wrapper = shallow(<Login />);

  expect(wrapper.find('input')).toHaveLength(3);
  expect(wrapper.find('label')).toHaveLength(2);
  expect(wrapper.find('form')).toHaveLength(1);
});

test('submit button is disabled by default', () => {
  const wrapper = shallow(<Login />);

  expect(wrapper.find('input[type="submit"]').prop('disabled')).toBe(true);
});

test('submit button is enabled after both fields change', () => {
  const wrapper = shallow(<Login />);

  wrapper.find('#email').simulate('change', { target: { value: 'user@example.com' } });
  wrapper.find('#password').simulate('change', { target: { value: 'password' } });

  expect(wrapper.find('input[type="submit"]').prop('disabled')).toBe(false);
});

test('form submission updates the login state without reloading', () => {
  const wrapper = shallow(<Login />);
  const event = { preventDefault: jest.fn() };

  wrapper.find('form').simulate('submit', event);

  expect(event.preventDefault).toHaveBeenCalledTimes(1);
  expect(wrapper.state('isLoggedIn')).toBe(true);
});
