import React from 'react';
import { clsx } from 'clsx';
import { IconProps } from '../types';

interface BaseIconProps extends IconProps {
  children: React.ReactNode;
}

export const Icon: React.FC<BaseIconProps> = ({
  children,
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={clsx('icon', className)}
      {...props}
    >
      {children}
    </svg>
  ); 
}; 