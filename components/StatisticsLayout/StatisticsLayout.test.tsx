import React from 'react';
import { cleanup, fireEvent, renderHook, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import mockRouter, { useRouter } from 'next-router-mock';
import { RouterContext } from 'next/dist/shared/lib/router-context';
import { renderWithStoreWrapper } from '../../utils/helpers/renderWithStore';
import StatisticsLayout from './StatisticsLayout';

afterEach(cleanup);

jest.mock('next/router', () => require('next-router-mock'));
jest.mock('next/dist/client/router', () => require('next-router-mock'));
beforeEach(() => {
  mockRouter.setCurrentUrl('/');
});

test('statistics tabs', async () => {
  const { result } = renderHook(() => {
    return useRouter();
  });
  renderWithStoreWrapper(
    <RouterContext.Provider value={result.current}>
      <StatisticsLayout imagesHidden={false} />
    </RouterContext.Provider>
  );
  const links = screen.getAllByTestId('test-link');
  fireEvent.click(links[1]);
  expect(result.current).toMatchObject({ asPath: '/statistics/episodes' });
  fireEvent.click(links[2]);
  expect(result.current).toMatchObject({ asPath: '/statistics/locations' });
});
