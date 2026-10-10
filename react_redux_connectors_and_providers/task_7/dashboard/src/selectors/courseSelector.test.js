import { fromJS } from 'immutable';
import { getListCourses } from './courseSelector';

test('returns courses as an Immutable List', () => {
  const courses = getListCourses(fromJS({ courses: { 1: { id: '1', name: 'React' } } }));
  expect(courses.size).toBe(1);
  expect(courses.first().get('name')).toBe('React');
});
