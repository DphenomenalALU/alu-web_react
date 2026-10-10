import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  row: { backgroundColor: '#f5f5f5ab' }, rowChecked: { backgroundColor: '#e6e4e4' },
  headerRow: { backgroundColor: '#deb5b545' }, cell: { border: '1px solid #ddd', padding: 12, textAlign: 'left' },
  headerCell: { backgroundColor: '#f4f4f4', border: '1px solid #ddd', padding: 12, textAlign: 'left' },
});

export default function CourseListRow({ id, isChecked, isHeader, onChangeRow, textFirstCell, textSecondCell }) {
  const rowClassName = css(isHeader ? styles.headerRow : (isChecked ? styles.rowChecked : styles.row));
  if (isHeader) return <tr className={rowClassName}><th className={css(styles.headerCell)} colSpan={textSecondCell === null ? 2 : undefined}>{textFirstCell}</th>{textSecondCell !== null && <th className={css(styles.headerCell)}>{textSecondCell}</th>}</tr>;
  return <tr className={rowClassName}><td className={css(styles.cell)}><input type="checkbox" checked={isChecked} onChange={(event) => onChangeRow(id, event.target.checked)} />{textFirstCell}</td><td className={css(styles.cell)}>{textSecondCell}</td></tr>;
}

CourseListRow.propTypes = { id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), isChecked: PropTypes.bool, isHeader: PropTypes.bool, onChangeRow: PropTypes.func, textFirstCell: PropTypes.string.isRequired, textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]) };
CourseListRow.defaultProps = { id: '', isChecked: false, isHeader: false, onChangeRow: () => {}, textSecondCell: null };
