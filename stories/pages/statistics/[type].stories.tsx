import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import StatisticTable from './[type]';
import { MemoryRouterProvider } from 'next-router-mock/dist/MemoryRouterProvider';
import { action } from '@storybook/addon-actions';

export default {
  title: '[type] page',
  component: StatisticTable,
  argTypes: {
    character: { table: { disable: true } },
  },
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
} as ComponentMeta<typeof StatisticTable>;
const Template: ComponentStory<typeof StatisticTable> = (args) => (
  <StatisticTable {...args} />
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
