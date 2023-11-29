import type { Meta, StoryObj } from '@storybook/react';

import Confirmation from './confirmation';

const meta = {
  title: 'Components/confirmation',
  component: Confirmation,
  tags: ['autodocs'],
} satisfies Meta<typeof Confirmation>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: 'Are you sure you want to delete this task?',
    onConfirm: () => {},
    onCancel: () => {},
  },
};
