import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { CharacterInfo } from './CharacterInfo';

afterEach(cleanup);

test('character info ui', () => {
  render(<CharacterInfo gender='' species='' status='' />);
  const characterGender = screen.getByText('Gender:');
  expect(characterGender).toBeInTheDocument();
  const characterSpecies = screen.getByText('Species:');
  expect(characterSpecies).toBeInTheDocument();
  const characterStatus = screen.getByText('Status:');
  expect(characterStatus).toBeInTheDocument();
});
