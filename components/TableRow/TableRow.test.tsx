import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TableRow from './TableRow';

afterEach(cleanup);

test('tablerow ui', () => {
  render(
    <table>
      <tbody>
        <TableRow row={{ id: 0, data: [1, 2, 3] }} />
      </tbody>
    </table>
  );
  const cells = screen.getAllByTestId('test-table-cell');
  expect(cells.length).toBe(3);
});
