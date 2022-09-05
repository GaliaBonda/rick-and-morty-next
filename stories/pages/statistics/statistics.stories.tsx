import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Statistics from './statistics';
import { MemoryRouterProvider } from 'next-router-mock/dist/MemoryRouterProvider';
import { action } from '@storybook/addon-actions';

export default {
  title: 'statistics page',
  component: Statistics,
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
} as ComponentMeta<typeof Statistics>;
const Template: ComponentStory<typeof Statistics> = (args) => (
  <Statistics {...args} />
);

export const Standart = Template.bind({});
Standart.args = {};
