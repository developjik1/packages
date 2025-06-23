
import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { NotificationsIcon } from '../../index';

const meta: Meta<typeof NotificationsIcon> = {
  title: 'Icons/NotificationsIcon',
  component: NotificationsIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    width: {
      control: { type: 'number', min: 16, max: 128 },
      defaultValue: 24,
    },
    height: {
      control: { type: 'number', min: 16, max: 128 },
      defaultValue: 24,
    },
    color: {
      control: 'color',
      defaultValue: 'currentColor',
    },
  },
  render: (args) => (
    <div style={{ color: args.color }}>
      <NotificationsIcon {...args} />
    </div>
  ),
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    width: 24,
    height: 24,
  },
};

export const Small: Story = {
  args: {
    width: 16,
    height: 16,
  },
};

export const Large: Story = {
  args: {
    width: 48,
    height: 48,
  },
};

export const CustomColor: Story = {
  args: {
    width: 32,
    height: 32,
    color: '#007bff',
  },
};
