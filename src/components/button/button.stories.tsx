import type { Meta, StoryObj } from '@storybook/react';

import { RiMenuLine, RiAddLine } from 'react-icons/ri';

import Button from './button';

const meta = {
  title: 'Components/button',
  component: Button,
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const SwitchSelected: Story = {
  args: {
    className: 'border border-solid border-primary-4 text-primary-4',
    children: <RiMenuLine size="24px" />,
  },
};

export const SwitchNotSelected: Story = {
  args: {
    className: 'text-neutral-1 hover:text-primary-4',
    children: <RiMenuLine size="24px" />,
  },
};

export const Add: Story = {
  args: {
    className: 'bg-primary-4 text-neutral-1',
    children: <RiAddLine size="24px" />,
  },
};
