import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  row: {
    backgroundColor: '#f5f5f5ab',
  },
  rowChecked: {
    backgroundColor: '#e6e4e4',
  },
  headerRow: {
    backgroundColor: '#deb5b545',
  },
  cell: {
    border: '1px solid #ddd',
    padding: 12,
    textAlign: 'left',
  },
  headerCell: {
    backgroundColor: '#f4f4f4',
    border: '1px solid #ddd',
    padding: 12,
    textAlign: 'left',
  },
});

function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
  const [isChecked, setIsChecked] = useState(false);
  const rowClassName = css(
    isHeader ? styles.headerRow : (isChecked ? styles.rowChecked : styles.row),
  );

  const handleChange = () => {
    setIsChecked((checked) => !checked);
  };

  if (isHeader) {
    return (
      <tr className={rowClassName}>
        {textSecondCell === null ? (
          <th className={css(styles.headerCell)} colSpan={2}>{textFirstCell}</th>
        ) : (
          <React.Fragment>
            <th className={css(styles.headerCell)}>{textFirstCell}</th>
            <th className={css(styles.headerCell)}>{textSecondCell}</th>
          </React.Fragment>
        )}
      </tr>
    );
  }

  return (
    <tr className={rowClassName}>
      <td className={css(styles.cell)}>
        <input type="checkbox" checked={isChecked} onChange={handleChange} />
        {textFirstCell}
      </td>
      <td className={css(styles.cell)}>{textSecondCell}</td>
    </tr>
  );
}

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};

export default CourseListRow;
