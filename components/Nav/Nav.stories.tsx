import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Nav } from './Nav';

export default {
  title: 'Nav',
  component: Nav,
  decorators: [
    (Story) => (
      <div style={{ width: '50%', marginTop: '2em' }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof Nav>;
const Template: ComponentStory<typeof Nav> = (args) => <Nav {...args} />;

export const Standart = Template.bind({});
Standart.args = {
  links: [
    { link: '/link1', title: 'Link 1' },
    { link: '/link2', title: 'Link 2' },
  ],
};
