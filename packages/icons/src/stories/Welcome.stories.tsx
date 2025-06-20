import type { Meta, StoryObj } from '@storybook/react';
import { Home, Heart, Search } from '../index';

const meta: Meta = {
  title: 'Icons/시작하기',
  parameters: {
    docs: {
      page: () => (
        <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
          <h1>@developjik1/icons</h1>
          <p>SVG 아이콘 라이브러리에 오신 것을 환영합니다!</p>
          
          <h2>설치</h2>
          <pre style={{ backgroundColor: '#f5f5f5', padding: '10px', borderRadius: '4px' }}>
            <code>npm install @developjik1/icons</code>
          </pre>
          
          <h2>사용법</h2>
          <pre style={{ backgroundColor: '#f5f5f5', padding: '10px', borderRadius: '4px' }}>
            <code>{`import { Home, Heart, Search } from '@developjik1/icons';

function App() {
  return (
    <div>
      <Home size={24} color="blue" />
      <Heart size={32} />
      <Search className="search-icon" />
    </div>
  );
}`}</code>
          </pre>
          
          <h2>미리보기</h2>
          <div style={{ display: 'flex', gap: '20px', alignItems: 'center', margin: '20px 0' }}>
            <Home size={24} color="blue" />
            <Heart size={32} />
            <Search size={24} />
          </div>
          
          <h2>특징</h2>
          <ul>
            <li>🎨 <strong>15개의 고품질 아이콘</strong></li>
            <li>⚡ <strong>경량화된 SVG 기반</strong></li>
            <li>🔧 <strong>커스터마이징 가능</strong> (크기, 색상, 클래스)</li>
            <li>📦 <strong>Tree-shaking 지원</strong></li>
            <li>🔍 <strong>TypeScript 완전 지원</strong></li>
            <li>⚛️ <strong>React 17+ 호환</strong></li>
          </ul>
        </div>
      ),
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Welcome: Story = {
  render: () => null,
}; 