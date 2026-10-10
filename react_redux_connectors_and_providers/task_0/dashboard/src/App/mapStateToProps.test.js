import { fromJS } from 'immutable';
import { mapStateToProps } from './App';

test('mapStateToProps maps isUserLoggedIn to isLoggedIn', () => {
  expect(mapStateToProps(fromJS({ isUserLoggedIn: true }))).toEqual({ isLoggedIn: true });
});
