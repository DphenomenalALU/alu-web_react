import React from 'react';
import { mount, shallow } from 'enzyme';
import Header from './Header';
import AppContext, { defaultUser } from '../App/AppContext';

test('Header renders without crashing', () => {
  shallow(<Header />);
});

test('Header renders one image and one heading', () => {
  const wrapper = shallow(<Header />);

  expect(wrapper.find('img')).toHaveLength(1);
  expect(wrapper.find('h1')).toHaveLength(1);
});

test('does not render logoutSection with the default context', () => {
  const wrapper = mount(
    <AppContext.Provider value={{ user: defaultUser, logOut: jest.fn() }}>
      <Header />
    </AppContext.Provider>,
  );

  expect(wrapper.find('#logoutSection')).toHaveLength(0);
});

test('renders logoutSection for a logged-in user', () => {
  const user = { email: 'user@example.com', password: 'secret', isLoggedIn: true };
  const wrapper = mount(
    <AppContext.Provider value={{ user, logOut: jest.fn() }}>
      <Header />
    </AppContext.Provider>,
  );

  expect(wrapper.find('#logoutSection')).toHaveLength(1);
  expect(wrapper.find('#logoutSection').text()).toContain('user@example.com');
});

test('calls context logOut when the logout link is clicked', () => {
  const logOut = jest.fn();
  const user = { email: 'user@example.com', password: 'secret', isLoggedIn: true };
  const wrapper = mount(
    <AppContext.Provider value={{ user, logOut }}>
      <Header />
    </AppContext.Provider>,
  );

  wrapper.find('#logoutSection a').simulate('click');
  expect(logOut).toHaveBeenCalledTimes(1);
});
