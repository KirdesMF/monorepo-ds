import type { Meta, StoryObj } from '@storybook/react';
import { AFButton } from './af-button';

const meta = {
  title: 'Example/Button',
  component: AFButton,
  tags: ['autodocs'],
} satisfies Meta<typeof AFButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'I am a primary button.',
  },
};
