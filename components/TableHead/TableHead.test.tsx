import React from 'react';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TableHead from './TableHead';

afterEach(cleanup);

test('tablehead callback', () => {
  const changeSort = jest.fn();
  render(
    <table>
      <TableHead header={['header']} changeSort={changeSort} />
    </table>
  );
  const sorter = screen.getAllByTestId('test-sorter')[0];
  fireEvent.click(sorter);
  expect(changeSort).toBeCalled();
});
