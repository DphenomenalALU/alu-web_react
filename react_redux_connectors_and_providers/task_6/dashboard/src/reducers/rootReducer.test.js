import { Map } from 'immutable';
import rootReducer from './rootReducer';

test('creates the complete initial reducer state', () => {
  const state = rootReducer(undefined, {});
  expect(Map.isMap(state.get('courses'))).toBe(true);
  expect(Map.isMap(state.get('notifications'))).toBe(true);
  expect(Map.isMap(state.get('ui'))).toBe(true);
});
