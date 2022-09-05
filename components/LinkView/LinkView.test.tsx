import React from 'react';
import { cleanup, fireEvent, renderHook, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import mockRouter, { useRouter } from 'next-router-mock';
import { RouterContext } from 'next/dist/shared/lib/router-context';
import { renderWithProviders } from '../../utils/helpers/renderWithProviders';
import LinkView from './LinkView';

afterEach(cleanup);

jest.mock('next/router', () => require('next-router-mock'));
jest.mock('next/dist/client/router', () => require('next-router-mock'));
beforeEach(() => {
  mockRouter.setCurrentUrl('/');
});

test('linkview hidden image', () => {
  const { result } = renderHook(() => {
    return useRouter();
  });
  renderWithProviders(
    <RouterContext.Provider value={result.current}>
      <LinkView
        link={{
          pathname: '',
        }}
        title='image'
        image=''
        hiddenImage={true}
        activeTab={false}
        clickHandler={() => undefined}
      />
    </RouterContext.Provider>
  );
  const image = screen.queryByAltText('image');

  expect(image).toBeNull();
});
test('linkview callback', async () => {
  const { result } = renderHook(() => {
    return useRouter();
  });
  const clickHandler = jest.fn();
  renderWithProviders(
    <RouterContext.Provider value={result.current}>
      <LinkView
        link={{
          pathname: '',
        }}
        title=''
        image=''
        hiddenImage={false}
        activeTab={false}
        clickHandler={clickHandler}
      />
    </RouterContext.Provider>
  );
  const link = screen.getByTestId('test-link');
  fireEvent.click(link);
  expect(clickHandler).toBeCalled();
});
test('linkview routing', async () => {
  const { result } = renderHook(() => {
    return useRouter();
  });
  const clickHandler = jest.fn();
  renderWithProviders(
    <RouterContext.Provider value={result.current}>
      <LinkView
        link={{
          pathname: 'somepath',
        }}
        title=''
        image=''
        hiddenImage={false}
        activeTab={false}
        clickHandler={clickHandler}
      />
    </RouterContext.Provider>
  );
  const link = screen.getByTestId('test-link');
  fireEvent.click(link);
  expect(result.current).toMatchObject({ asPath: '/somepath' });
});
