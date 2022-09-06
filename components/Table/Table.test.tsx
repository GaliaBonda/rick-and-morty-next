import React from 'react';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Table } from './Table';

afterEach(cleanup);

test('table callback', () => {
  const changeSort = jest.fn();
  render(<Table header={['header']} rows={[]} changeSort={changeSort} />);
  const sorter = screen.getAllByTestId('test-sorter')[0];
  fireEvent.click(sorter);
  expect(changeSort).toBeCalled();
});
