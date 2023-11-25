import type { Meta, StoryObj } from '@storybook/react';

import Column from './column';

const meta = {
  title: 'Components/column',
  component: Column,
  tags: ['autodocs'],
} satisfies Meta<typeof Column>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: 'To Do',
  },
};
