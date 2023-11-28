import type { Meta, StoryObj } from '@storybook/react';

import Form from './form';

const meta = {
  title: 'Components/form',
  component: Form,
  tags: ['autodocs'],
} satisfies Meta<typeof Form>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
