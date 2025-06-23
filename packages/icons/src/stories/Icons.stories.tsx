import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { AllIcons, IconName } from '../index';

const meta: Meta = {
  title: 'Icons/All Icons',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

// 모든 아이콘을 보여주는 스토리
export const AllIconsGrid: StoryObj = {
  render: () => {
    const iconNames = Object.keys(AllIcons) as IconName[];
    
    return (
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))', 
        gap: '16px',
        padding: '16px',
        maxWidth: '800px'
      }}>
        {iconNames.map((iconName) => {
          const IconComponent = AllIcons[iconName];
          return (
            <div 
              key={iconName}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '16px',
                border: '1px solid #e0e0e0',
                borderRadius: '8px',
                backgroundColor: '#fafafa'
              }}
            >
              <IconComponent width={32} height={32} color="#333" />
              <span style={{ 
                marginTop: '8px', 
                fontSize: '12px', 
                textAlign: 'center',
                wordBreak: 'break-word'
              }}>
                {iconName}
              </span>
            </div>
          );
        })}
      </div>
    );
  },
};

// 개별 아이콘 테스트
export const SingleIcon: StoryObj = {
  render: () => {
    const iconNames = Object.keys(AllIcons) as IconName[];
    const firstIconName = iconNames[0];
    const IconComponent = AllIcons[firstIconName];
    
    if (!IconComponent) {
      return <div>No icons available</div>;
    }
    
    return (
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
        <IconComponent width={16} height={16} />
        <IconComponent width={24} height={24} />
        <IconComponent width={32} height={32} />
        <IconComponent width={48} height={48} />
      </div>
    );
  },
};

// 색상 변경 테스트
export const ColorVariations: StoryObj = {
  render: () => {
    const iconNames = Object.keys(AllIcons) as IconName[];
    const firstIconName = iconNames[0];
    const IconComponent = AllIcons[firstIconName];
    
    if (!IconComponent) {
      return <div>No icons available</div>;
    }
    
    const colors = ['#000000', '#666666', '#999999', '#007bff', '#28a745', '#dc3545', '#ffc107'];
    
    return (
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
        {colors.map((color) => (
          <IconComponent key={color} width={32} height={32} color={color} />
        ))}
      </div>
    );
  },
};