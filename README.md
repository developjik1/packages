# @developjik1 Packages

모던 React 애플리케이션을 위한 UI 컴포넌트와 아이콘 라이브러리 모노레포입니다.

## 📦 패키지

- **[@developjik1/ui](./packages/ui)** - React UI 컴포넌트 라이브러리
- **[@developjik1/icons](./packages/icons)** - SVG 아이콘 컴포넌트 라이브러리

## 🚀 빠른 시작

### 설치

```bash
# NPM 레지스트리 설정
echo "@developjik1:registry=https://npm.pkg.github.com" >> ~/.npmrc

# 패키지 설치
npm install @developjik1/ui @developjik1/icons
```

### 사용법

```tsx
import { Button, Card } from '@developjik1/ui'
import { Home, Heart, Search } from '@developjik1/icons'

function App() {
  return (
    <Card>
      <Button variant="primary" size="lg">
        <Home size={20} />
        홈으로 가기
      </Button>
    </Card>
  )
}
```

## 🛠 개발 환경 설정

```bash
# 저장소 클론
git clone https://github.com/developjik1/packages.git
cd packages

# 의존성 설치
pnpm install

# 개발 서버 시작
pnpm dev

# 빌드
pnpm build

# 테스트
pnpm test
```

## 📋 개발 워크플로우

### Changeset을 사용한 버전 관리

이 프로젝트는 [Changesets](https://github.com/changesets/changesets)을 사용하여 버전 관리와 배포를 자동화합니다.

#### 1. 변경사항 기록

```bash
# 새로운 changeset 생성
pnpm changeset
```

#### 2. 버전 업데이트

```bash
# package.json 버전과 CHANGELOG 업데이트
pnpm version-packages
```

#### 3. 자동 배포

- `gitbutler/workspace` 브랜치에 커밋을 push하면 GitHub Actions가 자동으로:
  - 테스트 실행
  - 패키지 빌드
  - changeset이 있으면 Version PR 생성
  - Version PR이 머지되면 GitHub Packages에 배포

### 수동 배포

```bash
# 로컬에서 수동 배포 (NPM_TOKEN 환경변수 필요)
export NPM_TOKEN=your_github_token
pnpm release
```

## 🏗 아키텍처

```
packages/
├── apps/
│   ├── docs/          # 문서 사이트 (Next.js)
│   └── web/           # 데모 앱 (Next.js)
├── packages/
│   ├── ui/            # UI 컴포넌트
│   ├── icons/         # 아이콘 컴포넌트
│   ├── eslint-config/ # ESLint 설정
│   └── typescript-config/ # TypeScript 설정
└── .changeset/        # 버전 관리
```

## 🧪 테스트

```bash
# 모든 패키지 테스트
pnpm test

# 특정 패키지 테스트
pnpm --filter @developjik1/icons test

# 테스트 커버리지
pnpm test:coverage
```

## 📖 문서

- [UI 컴포넌트 가이드](./packages/ui/README.md)
- [아이콘 라이브러리 가이드](./packages/icons/README.md)
- [배포 설정 가이드](./DEPLOYMENT.md)

## 🔧 도구

- **빌드**: [Turborepo](https://turbo.build/repo)
- **패키지 관리**: [pnpm](https://pnpm.io/)
- **버전 관리**: [Changesets](https://github.com/changesets/changesets)
- **CI/CD**: GitHub Actions
- **레지스트리**: GitHub Packages

## 📄 라이선스

MIT License
