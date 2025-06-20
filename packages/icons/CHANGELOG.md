# @developjik1/icons Changelog

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
