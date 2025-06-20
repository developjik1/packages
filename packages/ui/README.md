# @developjik1/ui

현대적이고 확장 가능한 React UI 컴포넌트 라이브러리입니다.

## 설치

```bash
npm install @developjik1/ui
```

## 사용법

### 기본 사용

```tsx
import { Button, Card, Code } from '@developjik1/ui';

function App() {
  return (
    <div>
      <Button appName="MyApp" variant="primary" size="md">
        클릭하세요
      </Button>
      
      <Card title="제목" href="/link">
        카드 내용입니다.
      </Card>
      
      <Code>console.log('Hello World')</Code>
    </div>
  );
}
```

## 컴포넌트

### Button

기본 버튼 컴포넌트입니다.

**Props:**
- `appName: string` - 앱 이름 (필수)
- `variant?: "primary" | "secondary"` - 버튼 스타일 (기본값: "primary")
- `size?: "sm" | "md" | "lg"` - 버튼 크기 (기본값: "md")
- `className?: string` - 추가 CSS 클래스
- `style?: CSSProperties` - 인라인 스타일
- `children: ReactNode` - 버튼 내용

**예시:**
```tsx
<Button appName="MyApp" variant="secondary" size="lg">
  큰 보조 버튼
</Button>
```

### Card

링크가 포함된 카드 컴포넌트입니다.

**Props:**
- `title: string` - 카드 제목 (필수)
- `href: string` - 링크 URL (필수)
- `children: ReactNode` - 카드 내용 (필수)
- `className?: string` - 추가 CSS 클래스

### Code

인라인 코드 표시 컴포넌트입니다.

**Props:**
- `children: ReactNode` - 코드 내용 (필수)
- `className?: string` - 추가 CSS 클래스

## 테마 커스터마이징

### CSS 변수 사용

```css
:root {
  --ui-button-primary-bg: #10B981;
  --ui-button-primary-color: white;
  --ui-button-radius: 0.5rem;
  --ui-font-family: 'Pretendard', sans-serif;
}
```

### 프로그래매틱 테마 적용

```tsx
import { applyTheme } from '@developjik1/ui';

applyTheme({
  colors: {
    primary: '#10B981',
    secondary: '#F3F4F6',
  },
  spacing: {
    md: '0.75rem 1.25rem',
  },
  borderRadius: '0.5rem',
});
```

## 유틸리티 함수

### mergeStyles

여러 스타일 객체를 병합합니다.

```tsx
import { Button, mergeStyles } from '@developjik1/ui';

const customStyle = mergeStyles(
  { backgroundColor: '#10B981' },
  { padding: '1rem' }
);

<Button appName="MyApp" style={customStyle}>버튼</Button>
```

### conditionalStyle

조건에 따라 스타일을 적용합니다.

```tsx
import { Button, conditionalStyle } from '@developjik1/ui';

const [isActive, setIsActive] = useState(false);

<Button 
  appName="MyApp"
  style={conditionalStyle(
    isActive,
    { backgroundColor: '#10B981' },
    { backgroundColor: '#6B7280' }
  )}
>
  토글 버튼
</Button>
```

## 라이센스

MIT 