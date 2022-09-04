import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import CharacterView from './CharacterView';

export default {
  title: 'CharacterView',
  component: CharacterView,
  argTypes: {
    type: { table: { disable: true } },
    origin: { table: { disable: true } },
    location: { table: { disable: true } },
    episode: { table: { disable: true } },
    url: { table: { disable: true } },
    created: { table: { disable: true } },
  },
} as ComponentMeta<typeof CharacterView>;
const Template: ComponentStory<typeof CharacterView> = (args) => (
  <CharacterView {...args} />
);

export const Standart = Template.bind({});
Standart.args = {
  name: 'MORTY SMITH',
  status: 'Alive',
  species: 'Human',
  gender: 'Male',
  image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
  id: 0,
};
