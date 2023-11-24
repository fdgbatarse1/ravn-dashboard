import type { Meta, StoryObj } from '@storybook/react';

import Sidebar from './sidebar';

const meta = {
  title: 'Components/sidebar',
  component: Sidebar,
  tags: ['autodocs'],
} satisfies Meta<typeof Sidebar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
