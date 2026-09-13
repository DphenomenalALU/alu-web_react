import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Notifications from './Notifications/Notifications';
import Header from './Header/Header';
import Login from './Login/Login';
import Footer from './Footer/Footer';

test('App renders without crashing', () => {
  shallow(<App />);
});

test('App renders Notifications', () => {
  expect(shallow(<App />).find(Notifications)).toHaveLength(1);
});

test('App renders Header', () => {
  expect(shallow(<App />).find(Header)).toHaveLength(1);
});

test('App renders Login', () => {
  expect(shallow(<App />).find(Login)).toHaveLength(1);
});

test('App renders Footer', () => {
  expect(shallow(<App />).find(Footer)).toHaveLength(1);
});
