import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

test('App renders without crashing', () => {
  shallow(<App />);
});

test('App renders the header', () => {
  expect(shallow(<App />).find('.App-header')).toHaveLength(1);
});

test('App renders the body', () => {
  expect(shallow(<App />).find('.App-body')).toHaveLength(1);
});

test('App renders the footer', () => {
  expect(shallow(<App />).find('.App-footer')).toHaveLength(1);
});
