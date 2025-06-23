# @developjik1/prettier-config-developjik1

Prettier 설정 패키지입니다 (GitHub Packages).

## 설치

먼저 GitHub Packages 레지스트리를 설정하세요:

```bash
# .npmrc 파일에 추가
echo "@developjik1:registry=https://npm.pkg.github.com" >> .npmrc
```

패키지 설치:

```bash
npm install @developjik1/prettier-config-developjik1
# 또는
pnpm add @developjik1/prettier-config-developjik1
```

## 사용법

### package.json에서 사용

```json
{
  "prettier": "@developjik1/prettier-config-developjik1"
}
```

### .prettierrc.js에서 사용

```js
module.exports = require('@developjik1/prettier-config-developjik1');
```

### .prettierrc.mjs에서 사용 (ESM)

```js
import config from '@developjik1/prettier-config-developjik1';

export default config;
```

### 설정 확장

```js
import baseConfig from '@developjik1/prettier-config-developjik1';

export default {
  ...baseConfig,
  printWidth: 120, // 기본값 덮어쓰기
};
```

## 포함된 설정

- **semi**: `true` - 세미콜론 사용
- **tabWidth**: `2` - 탭 너비
- **singleQuote**: `true` - 작은따옴표 사용
- **printWidth**: `100` - 한 줄 최대 길이
- **trailingComma**: `'all'` - 모든 곳에 후행 콤마
- **arrowParens**: `'always'` - 화살표 함수에 항상 괄호

## 빌드

```bash
# 빌드
pnpm build
```

## 배포

이 패키지는 GitHub Packages로 자동 배포됩니다. 