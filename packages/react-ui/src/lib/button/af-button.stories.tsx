import type { Meta, StoryObj } from '@storybook/react';
import { AFButton } from './af-button';

const meta = {
  title: 'AF Button',
  component: AFButton,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'tertiary'],
      control: {
        type: 'select',
      },
    },
    isDisabled: {
      control: {
        type: 'boolean',
      },
    },
  },
} satisfies Meta<typeof AFButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Primary',
    variant: 'primary',
    isDisabled: false,
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary',
    variant: 'secondary',
    isDisabled: false,
  },
};

export const Tertiary: Story = {
  args: {
    children: 'Tertiary',
    variant: 'tertiary',
    isDisabled: false,
  },
};
