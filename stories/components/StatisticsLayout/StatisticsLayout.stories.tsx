import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import StatisticsLayout from './StatisticsLayout';
import { MemoryRouterProvider } from 'next-router-mock/dist/MemoryRouterProvider';
import { action } from '@storybook/addon-actions';

export default {
  title: 'StatisticsLayout',
  component: StatisticsLayout,
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
        <Story />
      </MemoryRouterProvider>
    ),
  ],
} as ComponentMeta<typeof StatisticsLayout>;
const Template: ComponentStory<typeof StatisticsLayout> = (args) => (
  <StatisticsLayout {...args} />
);

export const Standart = Template.bind({});
Standart.args = { imagesHidden: false };
