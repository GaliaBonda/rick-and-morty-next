import React from 'react';
import { cleanup, fireEvent, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Character } from './Character';
import singletonRouter from 'next/router';
import mockRouter from 'next-router-mock';
import { renderWithStoreWrapper } from '../../utils/helpers/renderWithStore';

afterEach(cleanup);

test('go to character page callback on click', async () => {
  const goToCharacter = jest.fn();
  renderWithStoreWrapper(
    <Character key={0} name='' id={0} image='' clickHandler={goToCharacter} />
  );
  const character = await screen.findByTestId('test-character');
  fireEvent.click(character);

  waitFor(() => {
    expect(goToCharacter).toHaveBeenCalled();
  });
});

jest.mock('next/router', () => require('next-router-mock'));
jest.mock('next/dist/client/router', () => require('next-router-mock'));
beforeEach(() => {
  mockRouter.setCurrentUrl('/');
});

test('router mock with click on character', async () => {
  const goToCharacter = jest.fn(() => {
    singletonRouter.push('/characters/0');
  });
  renderWithStoreWrapper(
    <Character key={0} name='' id={0} image='' clickHandler={goToCharacter} />
  );
  const character = await screen.findByTestId('test-character');
  fireEvent.click(character);
  expect(singletonRouter).toMatchObject({
    pathname: '/characters/0',
    asPath: '/characters/0',
  });
});
