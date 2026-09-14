import React from 'react';
import PropTypes from 'prop-types';
import './CourseList.css';
import CourseListRow from './CourseListRow';
import CourseShape from './CourseShape';

function CourseList({ listCourses }) {
  const rows = listCourses.length === 0
    ? [
      <CourseListRow
        key="empty-course-list"
        textFirstCell="No course available yet"
      />,
    ]
    : listCourses.map((course) => (
      <CourseListRow
        key={course.id}
        textFirstCell={course.name}
        textSecondCell={course.credit}
      />
    ));

  return (
    <table id="CourseList">
      <thead>
        <CourseListRow isHeader textFirstCell="Available courses" />
        <CourseListRow
          isHeader
          textFirstCell="Course name"
          textSecondCell="Credit"
        />
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(PropTypes.shape(CourseShape)),
};

CourseList.defaultProps = {
  listCourses: [],
};

export default CourseList;
