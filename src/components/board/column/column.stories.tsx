import type { Meta, StoryObj } from '@storybook/react';

import TasksQueryMock from '@/data/mocks/TasksQueryMock';
import groupBy from '@/utils/groupBy';

import Column from './column';

const meta = {
  title: 'Components/board/column',
  component: Column,
  tags: ['autodocs'],
} satisfies Meta<typeof Column>;

export default meta;

type Story = StoryObj<typeof meta>;

const columns = groupBy({ array: TasksQueryMock.tasks, fn: (task) => task.status });

export const Backlog: Story = {
  args: {
    name: 'Backlog',
    tasks: columns.BACKLOG,
    selectedCard: '',
    updateSelectedCard: () => {},
  },
};

export const Todo: Story = {
  args: {
    name: 'Todo',
    tasks: columns.TODO,
    selectedCard: '',
    updateSelectedCard: () => {},
  },
};

export const InProgress: Story = {
  args: {
    name: 'In Progress',
    tasks: columns.IN_PROGRESS,
    selectedCard: '',
    updateSelectedCard: () => {},
  },
};

export const Done: Story = {
  args: {
    name: 'Done',
    tasks: [],
    selectedCard: '',
    updateSelectedCard: () => {},
  },
};

export const Cancelled: Story = {
  args: {
    name: 'Cancelled',
    tasks: columns.CANCELLED,
    selectedCard: '',
    updateSelectedCard: () => {},
  },
};
