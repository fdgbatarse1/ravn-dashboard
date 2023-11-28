import type { Meta, StoryObj } from '@storybook/react';

import Buttons from './buttons';

const meta = {
  title: 'Components/form/buttons',
  component: Buttons,
  tags: ['autodocs'],
} satisfies Meta<typeof Buttons>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onClose: () => {},
  },
};
