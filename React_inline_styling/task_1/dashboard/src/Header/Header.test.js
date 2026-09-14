import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

test('Header renders without crashing', () => {
  shallow(<Header />);
});

test('Header renders one image and one heading', () => {
  const wrapper = shallow(<Header />);

  expect(wrapper.find('img')).toHaveLength(1);
  expect(wrapper.find('h1')).toHaveLength(1);
});
