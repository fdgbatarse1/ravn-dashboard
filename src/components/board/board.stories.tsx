import type { Meta, StoryObj } from '@storybook/react';

import Board from './board';

const meta = {
  title: 'Components/board',
  component: Board,
  tags: ['autodocs'],
} satisfies Meta<typeof Board>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
