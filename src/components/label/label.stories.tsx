import type { Meta, StoryObj } from '@storybook/react';

import Label from './label';

const meta = {
  title: 'Components/label',
  component: Label,
  tags: ['autodocs'],
} satisfies Meta<typeof Label>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Neutral: Story = {
  args: {
    text: 'Label',
    className: 'bg-neutral-2 text-neutral-1 bg-opacity-10',
  },
};

export const Green: Story = {
  args: {
    text: 'Label',
    className: 'bg-secondary-2 text-secondary-2 bg-opacity-10',
  },
};

export const Blue: Story = {
  args: {
    text: 'Label',
    className: 'bg-[#2F61BF] text-[#2F61BF] bg-opacity-10',
  },
};

export const Yellow: Story = {
  args: {
    text: 'Label',
    className: 'bg-secondary-4 text-secondary-4 bg-opacity-10',
  },
};

export const Red: Story = {
  args: {
    text: 'Label',
    className: 'bg-primary-4 text-primary-4 bg-opacity-10',
  },
};

export const OutlineNeutral: Story = {
  args: {
    text: 'Label',
    className: 'text-neutral-1 border border-solid border-neutral-1',
  },
};

export const OutlineGreen: Story = {
  args: {
    text: 'Label',
    className: 'border border-solid border-secondary-2 text-secondary-2',
  },
};

export const OutlineBlue: Story = {
  args: {
    text: 'Label',
    className: 'border border-solid border-[#2F61BF] text-[#2F61BF]',
  },
};

export const OutlineYellow: Story = {
  args: {
    text: 'Label',
    className: 'border border-solid border-secondary-4 text-secondary-4',
  },
};

export const OutlineRed: Story = {
  args: {
    text: 'Label',
    className: 'border border-solid border-primary-4 text-primary-4',
  },
};
