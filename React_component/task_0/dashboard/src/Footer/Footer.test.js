import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';

test('Footer renders without crashing', () => {
  shallow(<Footer />);
});

test('Footer contains the Copyright text', () => {
  expect(shallow(<Footer />).text()).toContain('Copyright');
});
