import React from 'react';
import { shallow } from 'enzyme';
import Login from '../Login/Login';
import WithLogging from './WithLogging';

describe('WithLogging', () => {
  let logSpy;

  beforeEach(() => {
    logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
  });

  afterEach(() => {
    logSpy.mockRestore();
  });

  test('logs mount and unmount for an unnamed HTML component', () => {
    const LoggedParagraph = WithLogging(() => <p />);
    const wrapper = shallow(<LoggedParagraph />);

    expect(logSpy).toHaveBeenCalledWith('Component Component is mounted');
    expect(LoggedParagraph.displayName).toBe('WithLogging(Component)');

    wrapper.unmount();

    expect(logSpy).toHaveBeenCalledWith('Component Component is going to unmount');
  });

  test('logs mount and unmount using the wrapped component name', () => {
    const LoggedLogin = WithLogging(Login);
    const wrapper = shallow(<LoggedLogin />);

    expect(logSpy).toHaveBeenCalledWith('Component Login is mounted');
    expect(LoggedLogin.displayName).toBe('WithLogging(Login)');

    wrapper.unmount();

    expect(logSpy).toHaveBeenCalledWith('Component Login is going to unmount');
  });
});
