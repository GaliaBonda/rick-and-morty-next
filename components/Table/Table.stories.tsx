import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Table } from './Table';
import { userEvent, waitFor, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

export default {
  title: 'Table',
  component: Table,
  argTypes: {
    changeSort: { action: 'change sort', table: { disable: true } },
  },
  decorators: [(Story) => <Story />],
} as ComponentMeta<typeof Table>;
const Template: ComponentStory<typeof Table> = (args) => <Table {...args} />;

export const Standart = Template.bind({});
Standart.args = {
  header: ['header 1', 'header 2'],
  rows: [
    { id: 0, data: ['one', 'two'] },
    { id: 0, data: ['three', 'four'] },
  ],
};
Standart.play = async ({ canvasElement, args }) => {
  const canvas = within(canvasElement);
  const tableHead = canvas.getAllByTestId('test-sorter');
  await userEvent.click(tableHead[0]);
  await waitFor(() => expect(args.changeSort).toBeCalled());
  await userEvent.click(tableHead[1]);
  await waitFor(() => expect(args.changeSort).toBeCalled());
};
