import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';

test('Login renders without crashing', () => {
  shallow(<Login />);
});

test('Login renders two inputs and two labels', () => {
  const wrapper = shallow(<Login />);

  expect(wrapper.find('input')).toHaveLength(2);
  expect(wrapper.find('label')).toHaveLength(2);
});
