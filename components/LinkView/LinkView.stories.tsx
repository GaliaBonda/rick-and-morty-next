import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import LinkView from './LinkView';
import { userEvent, waitFor, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

export default {
  title: 'LinkView',
  component: LinkView,
  argTypes: {
    clickHandler: { action: 'handle click', table: { disable: true } },
  },
  decorators: [
    (Story) => (
      <div style={{ width: '50%' }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof LinkView>;
const Template: ComponentStory<typeof LinkView> = (args) => (
  <LinkView {...args} />
);

export const Standart = Template.bind({});
Standart.args = {
  link: { pathname: '/' },
  title: 'Link',
  image: '',
  hiddenImage: true,
  activeTab: false,
};
Standart.play = async ({ canvasElement, args }) => {
  const canvas = within(canvasElement);
  const link = canvas.getByTestId('test-link');
  await userEvent.click(link);
  await waitFor(() => expect(args.clickHandler).toBeCalled());
};

export const Active = Template.bind({});
Active.args = {
  ...Standart.args,
  activeTab: true,
};

export const WithImage = Template.bind({});
WithImage.args = {
  ...Standart.args,
  image: '/rm-episodes.webp',
  hiddenImage: false,
};
