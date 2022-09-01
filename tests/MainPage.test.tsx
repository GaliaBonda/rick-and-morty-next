import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import WrappedApp from '../pages/_app';
import MainPage from '../components/MainPage';
import { Provider } from 'react-redux';
import { makeStore } from '../store/store';
import { renderWithProviders } from '../common/utils/renderWithProviders';
import Main from '../pages';

test('Main page ui on first load', async () => {
  renderWithProviders(<Main />);
  const links = screen.getAllByTestId('test-link');
  expect(links.length).toBeGreaterThan(1);
  const characters = await screen.findAllByTestId('test-character');
  await waitFor(() => {
    expect(characters.length).toEqual(20);
  });
});
