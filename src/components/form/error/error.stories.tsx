import type { Meta, StoryObj } from '@storybook/react';

import Error from './error';

const meta = {
  title: 'Components/form/error',
  component: Error,
  tags: ['autodocs'],
} satisfies Meta<typeof Error>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    error: ['Error message'],
  },
};
