import type { Meta, StoryObj } from '@storybook/react';

import Settings from './settings';

const meta = {
  title: 'Components/board/column/card/settings',
  component: Settings,
  tags: ['autodocs'],
} satisfies Meta<typeof Settings>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: '1',
  },
};
