# @developjik1/icons

SVG 기반의 React 아이콘 라이브러리입니다. 모든 아이콘은 React 컴포넌트로 제공되며 완전한 타입스크립트 지원을 제공합니다.

## 설치

```bash
npm install @developjik1/icons
```

## 사용법

### 기본 사용

```tsx
import { Home, Heart, Star, Search } from '@developjik1/icons';

function App() {
  return (
    <div>
      <Home size={24} color="currentColor" />
      <Heart size={32} color="red" />
      <Star size={20} color="#FFD700" />
      <Search className="search-icon" />
    </div>
  );
}
```

## 사용 가능한 아이콘

### 기본 아이콘
- `Home` - 홈 아이콘
- `User` - 사용자 아이콘
- `Search` - 검색 아이콘
- `Menu` - 햄버거 메뉴
- `X` - 닫기 아이콘
- `Plus` - 더하기 아이콘
- `ChevronDown` - 아래 화살표

### 동작 아이콘
- `Add` - 추가 아이콘
- `AddCircle` - 원형 추가 아이콘
- `AddCircleFilled` - 채워진 원형 추가 아이콘

### 감정/상태 아이콘
- `Heart` - 하트 아이콘
- `Star` - 별 아이콘
- `Bell` - 알림 벨

### 기타
- `Apartment` - 건물 아이콘

## Props

모든 아이콘 컴포넌트는 동일한 props를 지원합니다:

- `size?: number | string` - 아이콘 크기 (기본값: 24)
- `color?: string` - 아이콘 색상 (기본값: "currentColor")
- `className?: string` - 추가 CSS 클래스
- `...props` - 기타 SVG 속성들

## 예시

### 크기 조절
```tsx
<Home size={16} />  {/* 작은 아이콘 */}
<Home size={24} />  {/* 기본 크기 */}
<Home size={32} />  {/* 큰 아이콘 */}
<Home size="2rem" /> {/* CSS 단위 사용 */}
```

### 색상 변경
```tsx
<Heart color="red" />
<Star color="#FFD700" />
<Search color="currentColor" /> {/* 부모 요소의 color 상속 */}
```

### CSS 클래스 적용
```tsx
<Search className="w-6 h-6 text-blue-500" />
```

### 이벤트 핸들링
```tsx
<X 
  onClick={() => console.log('Close clicked')}
  style={{ cursor: 'pointer' }}
/>
```

## 새 아이콘 추가하기

1. SVG 파일을 `svgs/` 폴더에 추가
2. 생성 스크립트 실행: `npm run generate`
3. 빌드: `npm run build`

### SVG 파일 요구사항
- 24x24 viewBox 권장
- stroke-based 아이콘 (fill 대신 stroke 사용)
- 깔끔하고 단순한 디자인

## 커스터마이징

### CSS로 스타일링
```css
.my-icon {
  width: 1.5rem;
  height: 1.5rem;
  color: #3B82F6;
  transition: color 0.2s;
}

.my-icon:hover {
  color: #1D4ED8;
}
```

### 테마 시스템과 함께 사용
```tsx
// Tailwind CSS와 함께
<Home className="w-6 h-6 text-blue-500 hover:text-blue-700" />

// CSS-in-JS와 함께
<Heart 
  style={{
    color: theme.colors.primary,
    width: theme.spacing.lg,
    height: theme.spacing.lg,
  }}
/>
```

## 접근성

모든 아이콘은 접근성을 위한 속성을 지원합니다:

```tsx
<Search 
  aria-label="검색" 
  role="img"
/>
```

## 라이센스

MIT 