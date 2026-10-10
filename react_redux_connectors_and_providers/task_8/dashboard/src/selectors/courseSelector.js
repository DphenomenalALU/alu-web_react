export function getListCourses(state) {
  return state.get('courses').valueSeq().toList();
}

export default getListCourses;
