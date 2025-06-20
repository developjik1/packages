# @developjik1/icons 개발 가이드

## 개발 환경 설정

```bash
# 저장소 클론
git clone https://github.com/developjik1/packages.git
cd packages/packages/icons

# 의존성 설치
pnpm install

# 개발 모드 시작
pnpm dev
```

## 새 아이콘 추가하기

### 1. SVG 파일 준비
- `svgs/` 폴더에 SVG 파일 추가
- 파일명은 kebab-case 사용 (예: `arrow-right.svg`)
- 24x24 viewBox 권장
- stroke-based 아이콘 사용 (fill 대신 stroke)

### 2. 컴포넌트 생성
```bash
pnpm generate
```

### 3. 테스트 실행
```bash
pnpm test
```

### 4. 빌드 확인
```bash
pnpm build
```

## 버전 관리

### Patch 버전 (버그 수정)
```bash
pnpm publish:patch
```

### Minor 버전 (새 기능)
```bash
pnpm publish:minor
```

### Major 버전 (Breaking Changes)
```bash
pnpm publish:major
```

## 테스트

```bash
# 모든 테스트 실행
pnpm test

# 테스트 감시 모드
pnpm test:watch

# 커버리지 리포트
pnpm test:coverage
```

## 코드 스타일

- TypeScript 사용
- ESLint 규칙 준수
- 모든 컴포넌트에 타입 정의 제공
- Props에 기본값 설정

## SVG 파일 가이드라인

### ✅ 좋은 예시
```svg
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
</svg>
```

### ❌ 피할 것
- 복잡한 그라데이션이나 패턴
- 너무 많은 세부사항
- 하드코딩된 색상값
- 큰 파일 크기

## 문제 해결

### generate 스크립트 오류
```bash
# SVG 파일 형식 확인
# viewBox가 올바른지 확인
# 유효한 SVG 문법인지 확인
```

### 테스트 실패
```bash
# Jest 환경 확인
pnpm install

# TypeScript 타입 확인
pnpm check-types
```

## 배포 전 체크리스트

- [ ] 새 아이콘이 generate로 올바르게 생성되었는가?
- [ ] 모든 테스트가 통과하는가?
- [ ] 빌드가 성공하는가?
- [ ] README.md에 새 아이콘이 문서화되었는가?
- [ ] CHANGELOG.md가 업데이트되었는가? 