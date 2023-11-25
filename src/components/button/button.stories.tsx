import type { Meta, StoryObj } from '@storybook/react';

import Dashboard from '@/assets/svg/dashboard';

import Button from './button';

const meta = {
  title: 'Components/button',
  component: Button,
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <Dashboard fill="currentColor" />,
  },
};
