import type { Meta, StoryObj } from '@storybook/react';

import CheckboxInput from './checkboxInput';

const meta = {
  title: 'Components/form/checkboxInput',
  component: CheckboxInput,
  tags: ['autodocs'],
} satisfies Meta<typeof CheckboxInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'checkbox',
    array: [
      { id: '1', text: 'Checkbox 1' },
      { id: '2', text: 'Checkbox 2' },
      { id: '3', text: 'Checkbox 3' },
    ],
  },
};
