import { normalize, schema } from 'normalizr';

const course = new schema.Entity('courses');

export function coursesNormalizer(data) {
  return normalize(data, [course]).entities.courses;
}

export default coursesNormalizer;
