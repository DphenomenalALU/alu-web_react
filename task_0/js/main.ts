export interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'Guillaume',
  lastName: 'Salva',
  age: 20,
  location: 'San Francisco',
};

const student2: Student = {
  firstName: 'James',
  lastName: 'Mabey',
  age: 25,
  location: 'Columbia',
};

export const studentsList: Student[] = [student1, student2];

if (typeof document !== 'undefined') {
  const table: HTMLTableElement = document.createElement('table');

  studentsList.forEach((student: Student): void => {
    const row: HTMLTableRowElement = table.insertRow();
    const firstNameCell: HTMLTableCellElement = row.insertCell();
    const locationCell: HTMLTableCellElement = row.insertCell();

    firstNameCell.textContent = student.firstName;
    locationCell.textContent = student.location;
  });

  document.body.appendChild(table);
}
