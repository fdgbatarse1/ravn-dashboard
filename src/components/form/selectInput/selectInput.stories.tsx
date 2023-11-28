import type { Meta, StoryObj } from '@storybook/react';

import SelectInput from './selectInput';

const meta = {
  title: 'Components/form/selectInput',
  component: SelectInput,
  tags: ['autodocs'],
} satisfies Meta<typeof SelectInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'name',
    array: [
      { text: 'Option 1', id: 'option1' },
      { text: 'Option 2', id: 'option2' },
      { text: 'Option 3', id: 'option3' },
    ],
  },
};
