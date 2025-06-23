# @developjik1/eslint-config-developjik1

ESLint 설정 패키지입니다 (GitHub Packages).

## 설치

먼저 GitHub Packages 레지스트리를 설정하세요:

```bash
# .npmrc 파일에 추가
echo "@developjik1:registry=https://npm.pkg.github.com" >> .npmrc
```

패키지 설치:

```bash
npm install @developjik1/eslint-config-developjik1
# 또는
pnpm add @developjik1/eslint-config-developjik1
```

## 사용법

### Base 설정

```js
import { config } from "@developjik1/eslint-config-developjik1/base";

export default config;
```

### Next.js 설정

```js
import { nextJsConfig } from "@developjik1/eslint-config-developjik1/next-js";

export default nextJsConfig;
```

### React 라이브러리 설정

```js
import { config } from "@developjik1/eslint-config-developjik1/react-internal";

export default config;
```

## 빌드

```bash
# 개발 모드 (watch)
pnpm dev

# 프로덕션 빌드
pnpm build

# 빌드 파일 정리
pnpm clean
```

## 배포

이 패키지는 GitHub Packages로 자동 배포됩니다.

## 포함된 설정

- TypeScript 지원
- React 및 React Hooks 지원
- Next.js 지원
- Prettier 호환성
- Turbo 지원
- 경고만 표시 (only-warn) 