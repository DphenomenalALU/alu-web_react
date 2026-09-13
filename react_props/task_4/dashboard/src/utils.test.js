import { getFooterCopy, getFullYear, getLatestNotification } from './utils';

test('getFullYear returns the current year', () => {
  expect(getFullYear()).toBe(new Date().getFullYear());
});

test('getFooterCopy returns the index copy', () => {
  expect(getFooterCopy(true)).toBe('Holberton School');
});

test('getFooterCopy returns the dashboard copy', () => {
  expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
});

test('getLatestNotification returns the urgent requirement', () => {
  expect(getLatestNotification()).toBe('<strong>Urgent requirement</strong> - complete by EOD');
});
