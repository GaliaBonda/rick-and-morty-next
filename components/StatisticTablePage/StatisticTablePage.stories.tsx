import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StatisticTablePage } from './StatisticTablePage';
import { MemoryRouterProvider } from 'next-router-mock/dist/MemoryRouterProvider';
import { action } from '@storybook/addon-actions';

export default {
  title: 'StatisticTablePage',
  component: StatisticTablePage,
  decorators: [
    (Story) => (
      <MemoryRouterProvider
        url='/'
        async
        onPush={action('push')}
        onReplace={action('replace')}
        onRouteChangeStart={action('routeChangeStart')}
        onRouteChangeComplete={action('routeChangeComplete')}
      >
        <div style={{ padding: '3em 5em' }}>
          <Story />
        </div>
      </MemoryRouterProvider>
    ),
  ],
} as ComponentMeta<typeof StatisticTablePage>;
const Template: ComponentStory<typeof StatisticTablePage> = (args) => (
  <StatisticTablePage {...args} />
);

export const Standart = Template.bind({});
Standart.args = {
  rows: [
    {
      id: 1,
      data: ['Rick Sanchez', 51],
    },
    {
      id: 2,
      data: ['Morty Smith', 50],
    },
    {
      id: 3,
      data: ['Summer Smith', 42],
    },
  ],
  heading: ['Character name', 'Number of episodes'],
};
