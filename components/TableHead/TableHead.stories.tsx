import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TableHead } from './TableHead';
import { userEvent, waitFor, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

export default {
  title: 'TableHead',
  component: TableHead,
  argTypes: {
    changeSort: { action: 'change sort', table: { disable: true } },
  },
  decorators: [
    (Story) => (
      <div style={{ width: 'fit-content', backgroundColor: 'white' }}>
        <table>
          <Story />
        </table>
      </div>
    ),
  ],
} as ComponentMeta<typeof TableHead>;
const Template: ComponentStory<typeof TableHead> = (args) => (
  <TableHead {...args} />
);

export const Standart = Template.bind({});
Standart.args = {
  header: ['header 1', 'header 2'],
};
Standart.play = async ({ canvasElement, args }) => {
  const canvas = within(canvasElement);
  const cell = canvas.getAllByTestId('test-sorter');
  await userEvent.click(cell[0]);
  await waitFor(() => expect(args.changeSort).toBeCalled());
  const arrow = canvas.getAllByTestId('test-span');
  await waitFor(() =>
    expect(getComputedStyle(arrow[1]).color).toBe('rgb(128, 128, 128)')
  );
};
