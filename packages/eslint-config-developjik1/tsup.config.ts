import { defineConfig } from 'tsup';

export default defineConfig({
  // 1. 진입점 파일
  entry: ['index.ts'],

  // 2. 빌드 포맷 설정 (CJS, ESM 모두)
  format: ['cjs', 'esm'],

  // 3. TypeScript 타입 선언 파일 생성
  dts: true,

  // 4. 이전 빌드 결과물 삭제
  clean: true,

  // 5. 소스맵 생성 (디버깅에 유용)
  sourcemap: true,
  
  // 6. ESM과 CJS 간의 상호 운용성을 위한 'shim' 추가
  // 'import'와 'require'가 함께 사용될 때 발생할 수 있는 문제를 해결
  shims: true,
  
  // 7. tsup이 package.json의 "main", "module" 필드를 자동으로 설정하도록 함
  // (이미 수동으로 설정했으므로 선택사항이지만, 켜두면 편리)
  // main: './dist/index.cjs',
  // module: './dist/index.mjs'

  // 8. 확장자 설정
  // ESM 빌드 결과물은 .mjs, CJS 빌드 결과물은 .cjs로 생성
  outExtension({ format }) {
    return {
      js: format === 'esm' ? '.mjs' : '.cjs',
    };
  },
});