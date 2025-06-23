# @developjik/icons

SVGR을 사용하여 SVG 파일들을 React 컴포넌트로 자동 변환하는 아이콘 패키지입니다.

## ✨ 주요 기능

- 🎨 **136개의 아이콘** - 다양한 용도의 SVG 아이콘들
- ⚡ **자동 변환** - SVGR로 SVG → React 컴포넌트 자동 생성
- 🎭 **동적 색상** - `currentColor` 지원으로 CSS로 색상 변경 가능
- 📱 **반응형** - width, height props로 크기 조절 가능
- 📚 **스토리북** - 모든 아이콘의 인터랙티브 문서
- 🧪 **테스트** - 각 아이콘별 자동 테스트 생성
- 📦 **Tree-shaking** - 사용하는 아이콘만 번들에 포함
- 🔧 **TypeScript** - 완전한 타입 안전성
- 🚀 **GitHub Packages** - 자동 배포 지원

## 📦 설치

```bash
# npm
npm install @developjik/icons

# yarn
yarn add @developjik/icons

# pnpm
pnpm add @developjik/icons
```

### GitHub Packages에서 설치하는 경우

`.npmrc` 파일에 다음을 추가하세요:

```
@developjik:registry=https://npm.pkg.github.com
```

## 🚀 사용법

### 개별 아이콘 import

```tsx
import { AddIcon, CloseIcon, HomeIcon } from '@developjik/icons';

function App() {
  return (
    <div>
      <AddIcon />
      <CloseIcon className="text-red-500" />
      <HomeIcon style={{ color: '#blue', width: 24, height: 24 }} />
    </div>
  );
}
```

### 모든 아이콘을 객체로 import

```tsx
import { AllIcons } from '@developjik/icons';

function IconGallery() {
  return (
    <div className="icon-grid">
      {Object.entries(AllIcons).map(([name, IconComponent]) => (
        <div key={name} className="icon-item">
          <IconComponent width={32} height={32} />
          <span>{name}</span>
        </div>
      ))}
    </div>
  );
}
```

### 동적 아이콘 사용

```tsx
import { AllIcons, IconName } from '@developjik/icons';

interface DynamicIconProps {
  name: IconName;
  size?: number;
  color?: string;
}

function DynamicIcon({ name, size = 24, color = 'currentColor' }: DynamicIconProps) {
  const IconComponent = AllIcons[name];
  
  return (
    <div style={{ color }}>
      <IconComponent width={size} height={size} />
    </div>
  );
}

// 사용 예시
<DynamicIcon name="AddIcon" size={32} color="#007bff" />
```

## 🎨 색상 변경

모든 아이콘은 `currentColor`를 사용하므로 CSS `color` 속성으로 색상을 변경할 수 있습니다:

```tsx
// CSS 클래스로
<AddIcon className="text-blue-500" />

// 인라인 스타일로
<AddIcon style={{ color: '#007bff' }} />

// 부모 요소 색상 상속
<div style={{ color: 'red' }}>
  <AddIcon /> {/* 빨간색으로 표시됨 */}
</div>
```

## 📐 크기 조절

```tsx
// Props로 크기 지정
<AddIcon width={16} height={16} />
<AddIcon width={48} height={48} />

// CSS로 크기 지정
<AddIcon className="w-6 h-6" />
<AddIcon style={{ width: 32, height: 32 }} />
```

## 🎭 Props

모든 아이콘 컴포넌트는 `SVGProps<SVGSVGElement>`를 확장합니다:

```tsx
interface IconProps extends SVGProps<SVGSVGElement> {
  width?: number | string;
  height?: number | string;
  color?: string; // currentColor가 기본값
  className?: string;
  style?: CSSProperties;
  // ... 기타 SVG 속성들
}
```

## 🛠️ 개발

### 프로젝트 설정

```bash
# 의존성 설치
pnpm install

# SVG 컴포넌트 생성
pnpm run svgr

# 빌드
pnpm run build

# 테스트 실행
pnpm run test

# 스토리북 실행
pnpm run storybook
```

### 새로운 아이콘 추가

1. **SVG 파일 추가**: `assets/svg/` 폴더에 새 SVG 파일 추가
2. **컴포넌트 생성**: `pnpm run svgr` 실행
3. **빌드**: `pnpm run build` 실행

```bash
# 예시: new-icon.svg 추가 후
pnpm run svgr  # 자동으로 NewIconIcon.tsx, 스토리, 테스트 생성
pnpm run build # 패키지 빌드
```

### 자동 생성되는 파일들

`pnpm run svgr` 실행 시 자동으로 생성됩니다:

```
src/
├── components/          # React 컴포넌트들
│   ├── AddIcon.tsx
│   ├── CloseIcon.tsx
│   └── ...
├── stories/icons/       # 스토리북 스토리들
│   ├── AddIcon.stories.tsx
│   ├── CloseIcon.stories.tsx
│   └── ...
└── index.ts            # 통합 export 파일

tests/
├── icons/              # 개별 테스트들
│   ├── AddIcon.test.tsx
│   ├── CloseIcon.test.tsx
│   └── ...
└── AllIcons.test.tsx   # 통합 테스트
```

## 📋 사용 가능한 아이콘 목록

<details>
<summary>136개 아이콘 전체 목록 보기</summary>

- AddIcon, AddCircleIcon, AddCircleFilledIcon
- ApartmentIcon, ArrowBackIcon, ArrowDropDownIcon
- ArrowDropUpIcon, ArrowForwardIcon, ArrowLeftIcon
- ArrowRightIcon, AttachFileIcon, AttachFileAddIcon
- BellIcon, BoltIcon, BookmarkIcon
- BoxIcon, BuildIcon, CachedIcon
- CalendarMonthIcon, CallIcon, CancelIcon
- CancelSIcon, CashIcon, CheckCircleIcon
- CheckCircleFilledIcon, CheckCircleSIcon, ChevronDownIcon
- ChevronLeftIcon, ChevronRightIcon, ChevronUpIcon
- ClassIcon, CloseIcon, CloudUploadIcon
- ContactSupportIcon, ContainerIcon, ContentCopyIcon
- ConveyorBeltIcon, CottageFilledIcon, CottageOutlineIcon
- DashboardIcon, DeleteIcon, DeleteSIcon
- DeleteThumbIcon, DescriptionLineIcon, DomainIcon
- DoneIcon, EditIcon, EditSquareIcon
- ErrorIcon, ExcelIcon, ExcelDownloadIcon
- ExcelUploadIconIcon, EyeLockOpenOutlineIcon, EyeLockIcon
- FileIcon, FileUploadIcon, FileuploadCompleteIcon
- FindInPageIcon, HeartIcon, HelpIcon
- HelpOutlineIcon, HistoryIcon, HomeIcon
- HouseIcon, HowToRegIcon, ImageIcon
- InboundIcon, InfoIcon, InfoFillIcon
- InkEraserIcon, InventoryIcon, KeyboardDoubleArrowLeftIcon
- KeyboardDoubleArrowRightIcon, LanguageIcon, LeftPanelCloseIcon
- LeftPanelOpenIcon, LibraryAddIcon, ListIcon
- LoadingIcon, LocalShippingIcon, LockIcon
- LockCloseIcon, LockOpenIcon, LockOpenRightIcon
- LogicIcon, LogoutIcon, ManageAccountsIcon
- ManufacturingIcon, MoreHorizIcon, MoreVertIcon
- NotInterestedIcon, NoteAddIcon, NotificationsIcon
- OpenInBrowserIcon, OpenInNewIcon, OrderMenuIcon
- OrderPlayIcon, OrdersIcon, OutboundIcon
- PaidIcon, Payment2Icon, PaymentsIcon
- PeopleIcon, PersonRemoveIcon, PrintIcon
- QuickReorderIcon, RefreshIcon, RemoveIcon
- RemoveCircleIcon, ReplayCircleFilledIcon, ReportIcon
- RestaurantIcon, SaveIcon, ScheduleClockIcon
- SearchIcon, SelectIndicatorIcon, SendIcon
- SettingIcon, SettingsIcon, SettingsApplicationsIcon
- ShoppingCartIcon, SpinIcon, StackHexagonIcon
- StarIcon, StoreFilledIcon, StoreOutlineIcon
- SupportAgentIcon, SwapHorizIcon, TextSnippetIcon
- TuneIcon, UnfoldMoreIcon, UnfoldMoreSIcon
- WarningIcon, WarningFillIcon, WeightIcon
- WidgetsIcon

</details>

## 📚 스토리북

스토리북에서 모든 아이콘을 인터랙티브하게 확인할 수 있습니다:

```bash
pnpm run storybook
```

각 아이콘마다 다음 variants를 제공합니다:
- **Default**: 기본 크기 (24x24)
- **Small**: 작은 크기 (16x16)  
- **Large**: 큰 크기 (48x48)
- **CustomColor**: 커스텀 색상 (#007bff)

Controls에서 실시간으로 width, height, color를 조정할 수 있습니다.

## 🧪 테스트

```bash
# 모든 테스트 실행
pnpm run test

# 특정 아이콘 테스트
pnpm run test AddIcon.test.tsx

# 통합 테스트
pnpm run test AllIcons.test.tsx
```

각 아이콘은 다음 항목들을 테스트합니다:
- ✅ 컴포넌트 렌더링
- ✅ SVG 요소 포함 여부
- ✅ 접근성 role 속성
- ✅ 커스텀 props 적용
- ✅ className 적용

## 🚀 배포

### 수동 배포

```bash
# 빌드 후 배포
pnpm run build
npm publish
```

### 자동 배포 (GitHub Actions)

`main` 브랜치에 push하면 자동으로 GitHub Packages에 배포됩니다.

```yaml
# .github/workflows/publish-icons.yml
name: Publish Icons Package
on:
  push:
    branches: [main]
    paths: ['packages/icons/**']
```

## 🔧 기술 스택

- **SVGR**: SVG를 React 컴포넌트로 변환
- **TypeScript**: 타입 안전성
- **Tsup**: 빠른 빌드 도구
- **Vitest**: 단위 테스트
- **Storybook**: 컴포넌트 문서화
- **GitHub Actions**: 자동 배포

## 📄 라이선스

MIT License

## 🤝 기여하기

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 지원

문제가 있거나 새로운 기능을 제안하고 싶다면 [이슈](https://github.com/developjik/packages/issues)를 생성해주세요.

---

Made with ❤️ by [@developjik](https://github.com/developjik) 