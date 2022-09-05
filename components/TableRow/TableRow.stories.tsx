import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import TableRow from './TableRow';

export default {
  title: 'TableRow',
  component: TableRow,
  decorators: [
    (Story) => (
      <div style={{ backgroundColor: 'white', width: 'fit-content' }}>
        <table>
          <tbody>
            <Story />
          </tbody>
        </table>
      </div>
    ),
  ],
} as ComponentMeta<typeof TableRow>;
const Template: ComponentStory<typeof TableRow> = (args) => (
  <TableRow {...args} />
);

export const Standart = Template.bind({});
Standart.args = {
  row: { id: 0, data: ['first', 'second', 3, 1] },
};
