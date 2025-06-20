import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Home, Heart, Search, User, Star } from '../icons';

// 아이콘 목록을 표시하는 컴포넌트
const IconGallery = () => (
  <div style={{ 
    display: 'grid', 
    gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', 
    gap: '24px',
    padding: '24px'
  }}>
    <div style={{ textAlign: 'center' }}>
      <Home size={32} style={{ marginBottom: '8px' }} />
      <div>Home</div>
    </div>
    <div style={{ textAlign: 'center' }}>
      <Heart size={32} color="red" style={{ marginBottom: '8px' }} />
      <div>Heart</div>
    </div>
    <div style={{ textAlign: 'center' }}>
      <Search size={32} color="blue" style={{ marginBottom: '8px' }} />
      <div>Search</div>
    </div>
    <div style={{ textAlign: 'center' }}>
      <User size={32} color="green" style={{ marginBottom: '8px' }} />
      <div>User</div>
    </div>
    <div style={{ textAlign: 'center' }}>
      <Star size={32} color="orange" style={{ marginBottom: '8px' }} />
      <div>Star</div>
    </div> 
  </div>
);

const meta = {
  title: 'Icons/Gallery',
  component: IconGallery,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
@developjik1/icons 패키지의 아이콘들을 확인할 수 있습니다.

## 설치

\`\`\`bash
npm install @developjik1/icons
\`\`\`

## 사용법

\`\`\`tsx
import { Home, Heart, Search } from '@developjik1/icons';

function App() {
  return (
    <div>
      <Home size={24} color="blue" />
      <Heart size={32} />
      <Search className="search-icon" />
    </div>
  );
}
\`\`\`
        `,
      },
    },
  },
} satisfies Meta<typeof IconGallery>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

// 개별 아이콘 스토리들
export const HomeIcon: Story = {
  render: () => (
    <div style={{ textAlign: 'center', padding: '24px' }}>
      <Home size={48} style={{ marginBottom: '16px' }} />
      <h3>Home Icon</h3>
      <p>기본 홈 아이콘입니다.</p>
    </div>
  ),
};

export const HeartIcon: Story = {
  render: () => (
    <div style={{ textAlign: 'center', padding: '24px' }}>
      <Heart size={48} color="red" style={{ marginBottom: '16px' }} />
      <h3>Heart Icon</h3>
      <p>좋아요나 즐겨찾기를 나타내는 하트 아이콘입니다.</p>
    </div>
  ),
};

export const SearchIcon: Story = {
  render: () => (
    <div style={{ textAlign: 'center', padding: '24px' }}>
      <Search size={48} color="blue" style={{ marginBottom: '16px' }} />
      <h3>Search Icon</h3>
      <p>검색 기능을 나타내는 아이콘입니다.</p>
    </div>
  ),
}; 