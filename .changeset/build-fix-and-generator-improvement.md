---
"@developjik1/icons": patch
---

아이콘 빌드 시스템, 생성 스크립트 및 스토리북 대폭 개선

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