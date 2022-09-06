import React from 'react';
import { cleanup, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import mockRouter from 'next-router-mock';
import { renderWithStoreWrapper } from '../../utils/helpers/renderWithStore';
import StatisticTablePage from './StatisticTablePage';

afterEach(cleanup);

jest.mock('next/router', () => require('next-router-mock'));
jest.mock('next/dist/client/router', () => require('next-router-mock'));
beforeEach(() => {
  mockRouter.setCurrentUrl('/');
});

test('sorting', async () => {
  renderWithStoreWrapper(
    <StatisticTablePage
      rows={[
        {
          id: 1,
          data: ['Rick Sanchez', 51],
        },
        {
          id: 2,
          data: ['Morty Smith', 50],
        },
        {
          id: 3,
          data: ['Summer Smith', 42],
        },
      ]}
      heading={['Character name', 'Number of episodes']}
    />
  );
  const sorter = await screen.findAllByTestId('test-sorter');
  let tableCells = await screen.findAllByTestId('test-table-cell');
  userEvent.click(sorter[0]);
  await waitFor(() => {
    expect(screen.getAllByTestId('test-table-cell')[0].textContent).not.toEqual(
      tableCells[0].textContent
    );
  });
  tableCells = screen.getAllByTestId('test-table-cell');
  userEvent.click(sorter[1]);
  waitFor(() => {
    expect(screen.getAllByTestId('test-table-cell')[1].textContent).not.toEqual(
      tableCells[1].textContent
    );
  });
});
