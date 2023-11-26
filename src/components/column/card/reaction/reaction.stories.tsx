import type { Meta, StoryObj } from '@storybook/react';

import { RiChat3Line, RiNodeTree } from 'react-icons/ri';

import Reaction from './reaction';

const meta = {
  title: 'Components/column/card/reaction',
  component: Reaction,
  tags: ['autodocs'],
} satisfies Meta<typeof Reaction>;

export default meta;

type Story = StoryObj<typeof meta>;

export const SubTasks: Story = {
  args: {
    count: 5,
    icon: <RiNodeTree size="16px" />,
  },
};

export const Comments: Story = {
  args: {
    count: 5,
    icon: <RiChat3Line size="16px" />,
  },
};
