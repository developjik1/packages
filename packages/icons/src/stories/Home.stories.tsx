import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

// Home 아이콘 직접 정의 (import 문제 해결)
const Home = ({ size = 24, color = 'currentColor', className = '', ...props }) => (
  <svg
    className={`icon ${className}`}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9,22 9,12 15,12 15,22" />
  </svg>
);

const meta = {
  title: 'Icons/Home',
  component: Home,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    size: {
      control: { type: 'range', min: 12, max: 48, step: 2 },
      description: '아이콘 크기 (픽셀)',
    },
    color: {
      control: { type: 'color' },
      description: '아이콘 색상',
    },
  },
} satisfies Meta<typeof Home>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: 24,
    color: '#374151',
  },
};

export const Large: Story = {
  args: {
    size: 32,
    color: '#1f2937',
  },
};

export const Blue: Story = {
  args: {
    size: 28,
    color: '#3b82f6',
  },
};

export const Red: Story = {
  args: {
    size: 24,
    color: '#ef4444',
  },
}; 