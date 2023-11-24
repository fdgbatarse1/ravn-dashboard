import type { Meta, StoryObj } from '@storybook/react';

import Page from './page';

const meta = {
  title: 'pages/Page',
  component: Page,
  tags: ['autodocs'],
} satisfies Meta<typeof Page>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Home: Story = {
  args: {},
};
