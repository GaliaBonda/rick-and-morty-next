import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import MainPage from './MainPage';
import { testStore } from '../../../common/utils/renderWithProviders';
import { Provider } from 'react-redux';

export default {
  title: 'MainPage',
  component: MainPage,

  decorators: [
    (Story) => (
      <Provider store={testStore}>
        <div style={{ padding: '3em 5em' }}>
          <Story />
        </div>
      </Provider>
    ),
  ],
} as ComponentMeta<typeof MainPage>;
const Template: ComponentStory<typeof MainPage> = () => <MainPage />;

export const Standart = Template.bind({});
Standart.args = {};