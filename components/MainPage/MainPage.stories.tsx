import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import MainPage from './MainPage';
import { renderWithProvider } from '../../utils/helpers/renderWithStore';

export default {
  title: 'MainPage',
  component: MainPage,

  decorators: [
    (Story) =>
      renderWithProvider(
        <div style={{ padding: '3em 5em' }}>
          <Story />
        </div>
      ),
  ],
} as ComponentMeta<typeof MainPage>;
const Template: ComponentStory<typeof MainPage> = () => <MainPage />;

export const Standart = Template.bind({});
Standart.args = {};
