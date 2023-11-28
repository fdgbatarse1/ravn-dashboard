import type { Meta, StoryObj } from '@storybook/react';

import StateHandler from './stateHandler';

const meta = {
  title: 'Components/form/stateHandler',
  component: StateHandler,
  tags: ['autodocs'],
} satisfies Meta<typeof StateHandler>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    loading: false,
    error: false,
    onClose: () => {},
    children: <div>Children</div>,
  },
};

export const Loading: Story = {
  args: {
    loading: true,
    error: false,
    onClose: () => {},
    children: <div>Children</div>,
  },
};

export const Error: Story = {
  args: {
    loading: false,
    error: true,
    onClose: () => {},
    children: <div>Children</div>,
  },
};
