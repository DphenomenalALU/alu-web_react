import React from 'react';
import { mount } from 'enzyme';
import Footer from './Footer';
import AppContext, { defaultUser } from '../App/AppContext';

test('Footer renders without crashing', () => {
  mount(
    <AppContext.Provider value={{ user: defaultUser, logOut: jest.fn() }}>
      <Footer />
    </AppContext.Provider>,
  );
});

test('Footer contains the Copyright text', () => {
  const wrapper = mount(
    <AppContext.Provider value={{ user: defaultUser, logOut: jest.fn() }}>
      <Footer />
    </AppContext.Provider>,
  );

  expect(wrapper.text()).toContain('Copyright');
});

test('Footer does not display Contact us when the user is logged out', () => {
  const wrapper = mount(
    <AppContext.Provider value={{ user: defaultUser, logOut: jest.fn() }}>
      <Footer />
    </AppContext.Provider>,
  );

  expect(wrapper.find('a').filterWhere((link) => link.text() === 'Contact us'))
    .toHaveLength(0);
});

test('Footer displays Contact us when the user is logged in', () => {
  const user = { email: 'user@example.com', password: 'secret', isLoggedIn: true };
  const wrapper = mount(
    <AppContext.Provider value={{ user, logOut: jest.fn() }}>
      <Footer />
    </AppContext.Provider>,
  );

  expect(wrapper.find('a').filterWhere((link) => link.text() === 'Contact us'))
    .toHaveLength(1);
});
