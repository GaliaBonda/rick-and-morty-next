import React from 'react';
import {
  cleanup,
  fireEvent,
  renderHook,
  screen,
  waitFor,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import { renderWithProviders } from '../common/utils/renderWithProviders';
import Main from '../pages';
import Character from '../components/Character';
import userEvent from '@testing-library/user-event';
import singletonRouter from 'next/router';
import mockRouter, { useRouter } from 'next-router-mock';
import { RouterContext } from 'next/dist/shared/lib/router-context';
import CharacterPage from '../pages/characters/[character]';
import StatisticTable from '../pages/statistics/[type]';
import Statistics from '../pages/statistics';

afterEach(cleanup);

test('Main page ui on first load', async () => {
  renderWithProviders(<Main />);
  const links = screen.getAllByTestId('test-link');
  expect(links.length).toBeGreaterThan(1);
  const characters = await screen.findAllByTestId('test-character');
  await waitFor(() => {
    expect(characters.length).toEqual(20);
  });
});

test('go to character page callback on click', async () => {
  const goToCharacter = jest.fn();
  renderWithProviders(
    <Character key={0} name='' id={0} image='' clickHandler={goToCharacter} />
  );
  const character = await screen.findByTestId('test-character');
  fireEvent.click(character);

  await waitFor(() => {
    expect(goToCharacter).toHaveBeenCalled();
  });
});

jest.mock('next/router', () => require('next-router-mock'));
jest.mock('next/dist/client/router', () => require('next-router-mock'));
beforeEach(() => {
  mockRouter.setCurrentUrl('/');
});

test('router mock main page', async () => {
  const goToCharacter = jest.fn(() => {
    singletonRouter.push('/characters/0');
  });
  renderWithProviders(
    <Character key={0} name='' id={0} image='' clickHandler={goToCharacter} />
  );
  const character = await screen.findByTestId('test-character');
  fireEvent.click(character);
  expect(singletonRouter).toMatchObject({
    pathname: '/characters/0',
    asPath: '/characters/0',
  });
});

test('router go to character', async () => {
  const { result } = renderHook(() => {
    return useRouter();
  });
  renderWithProviders(
    <RouterContext.Provider value={result.current}>
      <Main />
    </RouterContext.Provider>
  );
  const characters = await screen.findAllByTestId('test-character');
  fireEvent.click(characters[0]);
  expect(result.current).toMatchObject({ asPath: 'characters/1' });
});

test('links', async () => {
  const { result } = renderHook(() => {
    return useRouter();
  });
  renderWithProviders(
    <RouterContext.Provider value={result.current}>
      <CharacterPage
        character={{
          name: '',
          status: '',
          species: '',
          gender: '',
          image: '',
          id: 0,
        }}
      />
    </RouterContext.Provider>
  );
  const links = screen.getAllByTestId('test-link');
  fireEvent.click(links[0]);
  expect(result.current).toMatchObject({ asPath: '/' });
  fireEvent.click(links[1]);
  expect(result.current).toMatchObject({ asPath: '/statistics' });
  fireEvent.click(links[2]);
  expect(result.current).toMatchObject({ asPath: '/statistics/episodes' });
  fireEvent.click(links[3]);
  expect(result.current).toMatchObject({ asPath: '/statistics/locations' });
});

test('statistics tabs', async () => {
  const { result } = renderHook(() => {
    return useRouter();
  });
  renderWithProviders(
    <RouterContext.Provider value={result.current}>
      <Statistics />
    </RouterContext.Provider>
  );
  const links = screen.getAllByTestId('test-link');
  fireEvent.click(links[1]);
  expect(result.current).toMatchObject({ asPath: '/statistics/episodes' });
  fireEvent.click(links[2]);
  expect(result.current).toMatchObject({ asPath: '/statistics/locations' });
});

test('sorting', async () => {
  renderWithProviders(
    <StatisticTable
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
  await waitFor(() => {
    expect(screen.getAllByTestId('test-table-cell')[1].textContent).not.toEqual(
      tableCells[1].textContent
    );
  });
});
