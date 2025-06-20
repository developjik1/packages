# @developjik1/ui

## 0.2.1

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
