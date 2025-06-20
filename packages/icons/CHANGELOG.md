# @developjik1/icons Changelog

## 0.1.3

### Patch Changes

- d80597b: 아이콘 빌드 시스템, 생성 스크립트 및 스토리북 대폭 개선

  ## 🔧 빌드 에러 수정

  - Colosseum 아이콘의 JSX 파싱 에러 해결
  - HTML 주석을 JSX 주석으로 변환
  - CSS 속성을 JSX 형식으로 변환 (stop-color → stopColor, class → className)

  ## 🚀 생성 스크립트 개선

  - `npm run generate` 스크립트를 대폭 개선하여 복잡한 SVG도 완벽한 JSX로 변환
  - HTML 속성 자동 변환: stop-color, class, stroke-_, fill-_, clip-\* 등
  - CSS 스타일 블록을 JSX 템플릿 리터럴로 변환
  - ID 충돌 방지를 위한 컴포넌트별 고유 ID 생성
  - ViewBox 자동 추출 및 적용

  ## 🎨 스토리북 대폭 개선

  - **모든 15개 아이콘**을 스토리북에 포함 (기존 6개 → 15개)
  - **카테고리별 스토리** 구성: 기본/네비게이션/액션/특수 아이콘
  - **아이콘 크기별 예시** 추가 (16px ~ 64px)
  - **향상된 문서화**: 설치법, 사용법, Props 설명 포함
  - **그리드 레이아웃**으로 사용자 경험 개선
  - **특수 아이콘**(Colosseum) 별도 처리

  ## 🧪 테스트 시스템 개선

  - **아이콘별 실제 속성**에 맞는 개별 테스트 구성
  - **카테고리별 분리**: stroke 아이콘/fill 아이콘/특수 아이콘
  - **DOM 속성명 정확성** 확보 (strokeWidth → stroke-width)
  - **특수 케이스** 개별 처리 (Apartment 20x20, Colosseum 로고)

  ## 🎯 배포 시스템 개선

  - PR 기반 배포 시스템 구축
  - release.yml: Version PR 생성만 담당
  - publish.yml: PR 머지 시 패키지 배포 및 스토리북 배포

  **이제 어떤 복잡한 SVG든 올바른 JSX 컴포넌트로 자동 변환되고, 개발자들이 모든 아이콘을 쉽게 찾고 사용할 수 있습니다!**

- 21c12d1: chore: 아이콘 컴포넌트에 React 임포트 추가 및 GitHub Actions 워크플로우 수정
- 21c12d1: PR 머지 기반 배포 시스템 구축

  - release.yml은 이제 PR 생성만 담당
  - publish.yml이 PR 머지 시 패키지 배포 및 스토리북 배포 담당
  - 더 안전하고 제어 가능한 배포 프로세스 구현

- a59421c: feat: improve test coverage and multi-storybook deployment structure

## 0.1.2

### Patch Changes

- 테스트와 Storybook 환경 수정

  **Icons 패키지 수정사항:**

  - Jest 설정 오류 수정 (moduleNameMapping → moduleNameMapper)
  - SVG 테스트에서 role="img" 문제 해결 - container.querySelector 사용
  - package.json JSON 구문 오류 수정
  - Storybook MDX 파일 문제 해결 - TSX로 전환
  - 모든 테스트 통과 (30/30)
  - Storybook 빌드 성공

  **UI 패키지 수정사항:**

  - clsx 의존성 추가로 빌드 오류 해결

  **개선사항:**

  - 테스트 안정성 향상
  - Storybook 자동 배포 준비 완료
  - React 17 호환성 유지

- React 17 호환성 지원 및 changeset 자동 배포 시스템 구축

  - React 17-19 버전 호환성 확보
  - changeset을 통한 버전 관리 시스템 도입
  - GitHub Actions 자동 배포 워크플로우 구축
  - 테스트 환경 개선 및 안정화

## 0.1.1

### Patch Changes

- 테스트와 Storybook 환경 수정

  **Icons 패키지 수정사항:**

  - Jest 설정 오류 수정 (moduleNameMapping → moduleNameMapper)
  - SVG 테스트에서 role="img" 문제 해결 - container.querySelector 사용
  - package.json JSON 구문 오류 수정
  - Storybook MDX 파일 문제 해결 - TSX로 전환
  - 모든 테스트 통과 (30/30)
  - Storybook 빌드 성공

  **UI 패키지 수정사항:**

  - clsx 의존성 추가로 빌드 오류 해결

  **개선사항:**

  - 테스트 안정성 향상
  - Storybook 자동 배포 준비 완료
  - React 17 호환성 유지

- React 17 호환성 지원 및 changeset 자동 배포 시스템 구축

  - React 17-19 버전 호환성 확보
  - changeset을 통한 버전 관리 시스템 도입
  - GitHub Actions 자동 배포 워크플로우 구축
  - 테스트 환경 개선 및 안정화

## [0.1.0] - 2025-06-20

### 추가된 기능

- 🎉 초기 출시!
- 15개의 기본 아이콘 컴포넌트 제공
- SVG 자동 변환 시스템 (generate 스크립트)
- TypeScript 완전 지원
- React 17+ 호환성
- Jest 테스트 환경 구축

### 포함된 아이콘

- **기본**: Home, User, Search, Menu, X, Plus, ChevronDown
- **동작**: Add, AddCircle, AddCircleFilled
- **감정/상태**: Heart, Star, Bell
- **기타**: Apartment

### 기술적 특징

- CommonJS + ESM 듀얼 번들 지원
- Tree-shaking 최적화
- clsx를 통한 동적 className 지원
- 완전한 TypeScript 타입 정의
- React 17-19 호환성

### 개발자 도구

- `npm run generate`: SVG → React 컴포넌트 자동 변환
- `npm run test`: Jest 테스트 실행
- `npm run build`: 프로덕션 빌드
