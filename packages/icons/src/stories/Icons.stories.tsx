import type { Meta, StoryObj } from '@storybook/react';
import { 
  Add,
  AddCircle,
  AddCircleFilled,
  Apartment,
  Bell,
  ChevronDown,
  Colosseum,
  Heart,
  Home,
  Menu,
  Plus,
  Search,
  Star,
  User,
  X
} from '../icons';

// 아이콘 목록을 표시하는 컴포넌트
const IconGallery = () => (
  <div style={{ 
    display: 'grid', 
    gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', 
    gap: '24px',
    padding: '24px'
  }}>
    {/* 기본 아이콘들 */}
    <div style={{ textAlign: 'center' }}>
      <Home size={32} style={{ marginBottom: '8px' }} />
      <div><small>Home</small></div>
    </div>
    <div style={{ textAlign: 'center' }}>
      <Heart size={32} color="red" style={{ marginBottom: '8px' }} />
      <div><small>Heart</small></div>
    </div>
    <div style={{ textAlign: 'center' }}>
      <Search size={32} color="blue" style={{ marginBottom: '8px' }} />
      <div><small>Search</small></div>
    </div>
    <div style={{ textAlign: 'center' }}>
      <User size={32} color="green" style={{ marginBottom: '8px' }} />
      <div><small>User</small></div>
    </div>
    <div style={{ textAlign: 'center' }}>
      <Star size={32} color="orange" style={{ marginBottom: '8px' }} />
      <div><small>Star</small></div>
    </div>
    <div style={{ textAlign: 'center' }}>
      <Bell size={32} color="purple" style={{ marginBottom: '8px' }} />
      <div><small>Bell</small></div>
    </div>
    
    {/* 네비게이션 아이콘들 */}
    <div style={{ textAlign: 'center' }}>
      <Menu size={32} style={{ marginBottom: '8px' }} />
      <div><small>Menu</small></div>
    </div>
    <div style={{ textAlign: 'center' }}>
      <ChevronDown size={32} style={{ marginBottom: '8px' }} />
      <div><small>ChevronDown</small></div>
    </div>
    <div style={{ textAlign: 'center' }}>
      <X size={32} color="red" style={{ marginBottom: '8px' }} />
      <div><small>X (Close)</small></div>
    </div>
    
    {/* 액션 아이콘들 */}
    <div style={{ textAlign: 'center' }}>
      <Add size={32} color="green" style={{ marginBottom: '8px' }} />
      <div><small>Add</small></div>
    </div>
    <div style={{ textAlign: 'center' }}>
      <Plus size={32} color="blue" style={{ marginBottom: '8px' }} />
      <div><small>Plus</small></div>
    </div>
    <div style={{ textAlign: 'center' }}>
      <AddCircle size={32} color="green" style={{ marginBottom: '8px' }} />
      <div><small>AddCircle</small></div>
    </div>
    <div style={{ textAlign: 'center' }}>
      <AddCircleFilled size={32} color="green" style={{ marginBottom: '8px' }} />
      <div><small>AddCircleFilled</small></div>
    </div>
    
    {/* 특수 아이콘들 */}
    <div style={{ textAlign: 'center' }}>
      <Apartment size={32} color="gray" style={{ marginBottom: '8px' }} />
      <div><small>Apartment</small></div>
    </div>
    <div style={{ textAlign: 'center', gridColumn: 'span 2' }}>
      <Colosseum size={80} color="purple" style={{ marginBottom: '8px', maxWidth: '200px' }} />
      <div><small>Colosseum (Logo)</small></div>
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
@developjik1/icons 패키지의 모든 아이콘들을 확인할 수 있습니다.

## 📊 현재 포함된 아이콘
- **총 15개 아이콘**
- 기본 UI 아이콘: Home, Heart, Search, User, Star, Bell
- 네비게이션: Menu, ChevronDown, X
- 액션: Add, Plus, AddCircle, AddCircleFilled  
- 특수: Apartment, Colosseum

## 설치

\`\`\`bash
npm install @developjik1/icons
\`\`\`

## 사용법

\`\`\`tsx
import { Home, Heart, Search, Add } from '@developjik1/icons';

function App() {
  return (
    <div>
      <Home size={24} color="blue" />
      <Heart size={32} />
      <Search className="search-icon" />
      <Add size={20} color="green" />
    </div>
  );
}
\`\`\`

## Props
- **size**: 아이콘 크기 (기본값: 24)
- **color**: 아이콘 색상 (기본값: currentColor)
- **className**: 추가 CSS 클래스
- 기타 SVG 속성들
        `,
      },
    },
  },
} satisfies Meta<typeof IconGallery>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AllIcons: Story = {
  name: '🎨 모든 아이콘',
};

// 카테고리별 스토리들
export const BasicIcons: Story = {
  name: '🏠 기본 아이콘',
  render: () => (
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', 
      gap: '24px',
      padding: '24px'
    }}>
      <div style={{ textAlign: 'center' }}>
        <Home size={48} style={{ marginBottom: '8px' }} />
        <div>Home</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Heart size={48} color="red" style={{ marginBottom: '8px' }} />
        <div>Heart</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Search size={48} color="blue" style={{ marginBottom: '8px' }} />
        <div>Search</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <User size={48} color="green" style={{ marginBottom: '8px' }} />
        <div>User</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Star size={48} color="orange" style={{ marginBottom: '8px' }} />
        <div>Star</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Bell size={48} color="purple" style={{ marginBottom: '8px' }} />
        <div>Bell</div>
      </div>
    </div>
  ),
};

export const NavigationIcons: Story = {
  name: '🧭 네비게이션',
  render: () => (
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', 
      gap: '24px',
      padding: '24px'
    }}>
      <div style={{ textAlign: 'center' }}>
        <Menu size={48} style={{ marginBottom: '8px' }} />
        <div>Menu</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <ChevronDown size={48} style={{ marginBottom: '8px' }} />
        <div>ChevronDown</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <X size={48} color="red" style={{ marginBottom: '8px' }} />
        <div>X (Close)</div>
      </div>
    </div>
  ),
};

export const ActionIcons: Story = {
  name: '⚡ 액션',
  render: () => (
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', 
      gap: '24px',
      padding: '24px'
    }}>
      <div style={{ textAlign: 'center' }}>
        <Add size={48} color="green" style={{ marginBottom: '8px' }} />
        <div>Add</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Plus size={48} color="blue" style={{ marginBottom: '8px' }} />
        <div>Plus</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <AddCircle size={48} color="green" style={{ marginBottom: '8px' }} />
        <div>AddCircle</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <AddCircleFilled size={48} color="green" style={{ marginBottom: '8px' }} />
        <div>AddCircleFilled</div>
      </div>
    </div>
  ),
};

export const SpecialIcons: Story = {
  name: '🏢 특수 아이콘',
  render: () => (
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', 
      gap: '24px',
      padding: '24px'
    }}>
      <div style={{ textAlign: 'center' }}>
        <Apartment size={48} color="gray" style={{ marginBottom: '8px' }} />
        <div>Apartment</div>
      </div>
      <div style={{ textAlign: 'center', gridColumn: 'span 2' }}>
        <Colosseum size={100} color="purple" style={{ marginBottom: '8px', maxWidth: '300px' }} />
        <div>Colosseum (Logo)</div>
      </div>
    </div>
  ),
};

// 사이즈별 예시
export const IconSizes: Story = {
  name: '📏 크기 예시',
  render: () => (
    <div style={{ padding: '24px' }}>
      <h3>아이콘 크기 옵션</h3>
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: '24px',
        marginBottom: '24px'
      }}>
        <div style={{ textAlign: 'center' }}>
          <Home size={16} style={{ marginBottom: '4px' }} />
          <div><small>16px</small></div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <Home size={24} style={{ marginBottom: '4px' }} />
          <div><small>24px (기본)</small></div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <Home size={32} style={{ marginBottom: '4px' }} />
          <div><small>32px</small></div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <Home size={48} style={{ marginBottom: '4px' }} />
          <div><small>48px</small></div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <Home size={64} style={{ marginBottom: '4px' }} />
          <div><small>64px</small></div>
        </div>
      </div>
    </div>
  ),
};