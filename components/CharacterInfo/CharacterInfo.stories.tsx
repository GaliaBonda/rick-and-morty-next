import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import CharacterInfo from './CharacterInfo';

export default {
  title: 'CharacterInfo',
  component: CharacterInfo,
  decorators: [
    (Story) => (
      <div
        style={{
          width: 'fit-content',
          backgroundColor: 'white',
          padding: '1em',
          borderRadius: '10px',
        }}
      >
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof CharacterInfo>;
const Template: ComponentStory<typeof CharacterInfo> = (args) => (
  <CharacterInfo {...args} />
);

export const Standart = Template.bind({});
Standart.args = {
  gender: 'somegender',
  species: 'somespecies',
  status: 'somestatus',
};
