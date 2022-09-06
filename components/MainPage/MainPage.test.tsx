import React from 'react';
import {
  cleanup,
  fireEvent,
  renderHook,
  screen,
  waitFor,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import mockRouter, { useRouter } from 'next-router-mock';
import { RouterContext } from 'next/dist/shared/lib/router-context';
import { renderWithStoreWrapper } from '../../utils/helpers/renderWithStore';
import { MainPage } from './MainPage';

afterEach(cleanup);

test('Main page ui on first load', async () => {
  renderWithStoreWrapper(<MainPage />);
  const links = screen.getAllByTestId('test-link');
  expect(links.length).toBeGreaterThan(1);
  const characters = await screen.findAllByTestId('test-character');
  waitFor(() => {
    expect(characters.length).toEqual(20);
  });
});

jest.mock('next/router', () => require('next-router-mock'));
jest.mock('next/dist/client/router', () => require('next-router-mock'));
beforeEach(() => {
  mockRouter.setCurrentUrl('/');
});

test('router go to character', async () => {
  const { result } = renderHook(() => {
    return useRouter();
  });
  renderWithStoreWrapper(
    <RouterContext.Provider value={result.current}>
      <MainPage />
    </RouterContext.Provider>
  );
  const characters = await screen.findAllByTestId('test-character');
  fireEvent.click(characters[0]);
  expect(result.current).toMatchObject({ asPath: 'characters/1' });
});
