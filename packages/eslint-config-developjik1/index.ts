// ESLint 설정 객체를 정의합니다.
// 이 객체는 CJS와 ESM 양쪽에서 모두 사용할 수 있는 순수한 데이터입니다.
const config = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'turbo',
    'prettier', // 반드시 마지막에 위치
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    // 여기에 팀의 규칙을 정의합니다.
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/no-explicit-any': 'error',
  },
  ignorePatterns: [
    'node_modules/',
    'dist/',
    '.eslintrc.js',
    '**/*.config.js',
    '**/*.config.ts',
    'vitest.config.ts', // 예시: 특정 설정 파일 무시
  ],
  env: {
    node: true, // Node.js 전역 변수(e.g., `module`, `require`)를 인식
  },
};

// CommonJS와 ESM 모두에서 이 객체를 내보낼 수 있도록 export default 사용
export default config;