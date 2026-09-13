import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

test('App renders without crashing', () => {
  shallow(<App />);
});

test('App renders the header', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find('.App-header')).toHaveLength(1);
});

test('App renders the body', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find('.App-body')).toHaveLength(1);
});

test('App renders the footer', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find('.App-footer')).toHaveLength(1);
});
