import type { Meta, StoryObj } from '@storybook/react';

import User from './user';

const meta = {
  title: 'Components/user',
  component: User,
  tags: ['autodocs'],
} satisfies Meta<typeof User>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'User profile',
    className: 'h-8 w-8',
    text: 'John Doe',
  },
};
