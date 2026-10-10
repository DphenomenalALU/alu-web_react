import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { StyleSheet, css } from 'aphrodite';
import CourseListRow from './CourseListRow';
import { fetchCourses, selectCourse, unSelectCourse } from '../actions/courseActionCreators';
import { getListCourses } from '../selectors/courseSelector';

const styles = StyleSheet.create({ courseList: { borderCollapse: 'collapse', color: '#222', margin: 24, width: 'calc(100% - 48px)' } });

export class CourseList extends React.Component {
  componentDidMount() { this.props.fetchCourses(); }

  onChangeRow = (id, checked) => {
    if (checked) this.props.selectCourse(id);
    else this.props.unSelectCourse(id);
  };

  render() {
    const { listCourses } = this.props;
    const rows = listCourses.length === 0 ? [<CourseListRow key="empty" textFirstCell="No course available yet" />]
      : listCourses.map((course) => (
        <CourseListRow key={course.id} textFirstCell={course.name} textSecondCell={course.credit}
          isChecked={course.isSelected} onChangeRow={this.onChangeRow} id={course.id} />
      ));
    return <table id="CourseList" className={css(styles.courseList)}><thead>
      <CourseListRow isHeader textFirstCell="Available courses" />
      <CourseListRow isHeader textFirstCell="Course name" textSecondCell="Credit" />
    </thead><tbody>{rows}</tbody></table>;
  }
}

CourseList.propTypes = { listCourses: PropTypes.array, fetchCourses: PropTypes.func, selectCourse: PropTypes.func, unSelectCourse: PropTypes.func };
CourseList.defaultProps = { listCourses: [], fetchCourses: () => {}, selectCourse: () => {}, unSelectCourse: () => {} };

export function mapStateToProps(state) { return { listCourses: getListCourses(state).map((course) => course.toJS()).toArray() }; }

export default connect(mapStateToProps, { fetchCourses, selectCourse, unSelectCourse })(CourseList);
