import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { RiFunctionLine } from 'react-icons/ri';

import Tab from './tab';

const meta = {
  title: 'Components/sidebar/Tab',
  component: Tab,
  tags: ['autodocs'],
} satisfies Meta<typeof Tab>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: 'dashboard',
    href: '/',
    icon: <RiFunctionLine size="24px" />,
  },
};
