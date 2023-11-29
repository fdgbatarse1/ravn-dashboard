import type { Meta, StoryObj } from '@storybook/react';
import TasksQueryMock from '@/data/mocks/TasksQueryMock';

import Card from './card';

const meta = {
  title: 'Components/board/column/card',
  component: Card,
  tags: ['autodocs'],
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    task: TasksQueryMock.tasks[0],
    selectedCard: '',
    updateSelectedCard: () => {},
  },
};
