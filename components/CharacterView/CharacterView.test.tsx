import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { CharacterView } from './CharacterView';

afterEach(cleanup);

test('character view image', () => {
  render(
    <CharacterView
      id={0}
      name=''
      status=''
      species=''
      gender=''
      image='https://rickandmortyapi.com/api/character/avatar/2.jpeg'
    />
  );
  const image = screen.getByAltText('character image');
  expect(image).toHaveAttribute(
    'src',
    'https://rickandmortyapi.com/api/character/avatar/2.jpeg'
  );
});
