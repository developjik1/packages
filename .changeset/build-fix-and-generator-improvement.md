---
"@developjik1/icons": patch
---

아이콘 빌드 시스템 및 생성 스크립트 대폭 개선

## 🔧 빌드 에러 수정
- Colosseum 아이콘의 JSX 파싱 에러 해결
- HTML 주석을 JSX 주석으로 변환
- CSS 속성을 JSX 형식으로 변환 (stop-color → stopColor, class → className)

## 🚀 생성 스크립트 개선
- `npm run generate` 스크립트를 대폭 개선하여 복잡한 SVG도 완벽한 JSX로 변환
- HTML 속성 자동 변환: stop-color, class, stroke-*, fill-*, clip-* 등
- CSS 스타일 블록을 JSX 템플릿 리터럴로 변환
- ID 충돌 방지를 위한 컴포넌트별 고유 ID 생성
- ViewBox 자동 추출 및 적용

## 🎯 배포 시스템 개선
- PR 기반 배포 시스템 구축
- release.yml: Version PR 생성만 담당
- publish.yml: PR 머지 시 패키지 배포 및 스토리북 배포

이제 어떤 복잡한 SVG든 올바른 JSX 컴포넌트로 자동 변환됩니다! 