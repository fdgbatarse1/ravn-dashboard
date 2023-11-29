import type { Meta, StoryObj } from '@storybook/react';

import { PointEstimate, TaskTag } from '@/gql/graphql';
import { State } from '@/actions/task/taskSchema';
import Form from './form';

const meta = {
  title: 'Components/form',
  component: Form,
  tags: ['autodocs'],
} satisfies Meta<typeof Form>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onClose: () => {},
    action: (state: any, payload: any): Promise<State> => {
      const message = `Action called with state: ${JSON.stringify(
        state,
      )} and payload: ${JSON.stringify(payload)}`;

      return Promise.resolve({
        data: {
          id: message,
          position: 5,
        },
      });
    },
    title: 'Test 1',
    estimate: PointEstimate.Four,
    assignee: '1234',
    tags: [TaskTag.React],
    dueDate: '2023-11-18T07:29',
    id: '1234',
    position: 5,
    type: 'create',
  },
};
