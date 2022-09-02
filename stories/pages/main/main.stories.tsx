import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Main from './main';
import { Provider } from 'react-redux';
import { testStore } from '../../../common/utils/renderWithProviders';

export default {
  title: 'main page',
  component: Main,
  argTypes: {
    character: { table: { disable: true } },
  },
  decorators: [
    (Story) => (
      <Provider store={testStore}>
        <Story />
      </Provider>
    ),
  ],
} as ComponentMeta<typeof Main>;
const Template: ComponentStory<typeof Main> = (args) => <Main {...args} />;

export const Standart = Template.bind({});
Standart.args = {};
