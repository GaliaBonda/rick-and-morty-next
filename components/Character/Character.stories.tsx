import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Character from './Character';
import { userEvent, waitFor, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

export default {
  title: 'Character',
  component: Character,
  argTypes: {
    clickHandler: { action: 'handle click', table: { disable: true } },
  },
} as ComponentMeta<typeof Character>;
const Template: ComponentStory<typeof Character> = (args) => (
  <Character {...args} />
);

export const Standart = Template.bind({});
Standart.args = {
  image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
  name: 'Mosty Smith',
  id: 0,
};
Standart.play = async ({ canvasElement, args }) => {
  const canvas = within(canvasElement);
  const link = canvas.getByTestId('test-character');
  await userEvent.click(link);
  await waitFor(() => expect(args.clickHandler).toBeCalled());
};
