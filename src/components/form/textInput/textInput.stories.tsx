import type { Meta, StoryObj } from '@storybook/react';

import TextInput from './textInput';

const meta = {
  title: 'Components/form/textInput',
  component: TextInput,
  tags: ['autodocs'],
} satisfies Meta<typeof TextInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'name',
    placeholder: 'type something here...',
  },
};
