import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

const Welcome = () => (
  <div style={{ padding: '40px', maxWidth: '600px', margin: '0 auto' }}>
    <h1 style={{ color: '#333', marginBottom: '24px' }}>@developjik1/icons</h1>
    <p style={{ fontSize: '18px', lineHeight: '1.6', marginBottom: '32px' }}>
      SVG 아이콘 라이브러리에 오신 것을 환영합니다!
    </p>
    
    <div style={{ marginBottom: '32px' }}>
      <h2 style={{ color: '#555', marginBottom: '16px' }}>설치</h2>
      <pre style={{ 
        background: '#f5f5f5', 
        padding: '16px', 
        borderRadius: '8px',
        fontSize: '14px'
      }}>
        npm install @developjik1/icons
      </pre>
    </div>

    <div style={{ marginBottom: '32px' }}>
      <h2 style={{ color: '#555', marginBottom: '16px' }}>사용법</h2>
      <pre style={{ 
        background: '#f5f5f5', 
        padding: '16px', 
        borderRadius: '8px',
        fontSize: '14px'
      }}>
{`import { Home, Heart, Search } from '@developjik1/icons';

function App() {
  return (
    <div>
      <Home size={24} color="blue" />
      <Heart size={32} />
      <Search className="search-icon" />
    </div>
  );
}`}
      </pre>
    </div>

    <div>
      <h2 style={{ color: '#555', marginBottom: '16px' }}>특징</h2>
      <ul style={{ lineHeight: '1.8' }}>
        <li>🎨 15개의 고품질 아이콘</li>
        <li>⚡ 경량화된 SVG 기반</li>
        <li>🔧 커스터마이징 가능 (크기, 색상, 클래스)</li>
        <li>📦 Tree-shaking 지원</li>
        <li>🔍 TypeScript 완전 지원</li>
        <li>⚛️ React 17+ 호환</li>
      </ul>
    </div>
  </div>
);

const meta = {
  title: '시작하기',
  component: Welcome,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Welcome>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {}; 