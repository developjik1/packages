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
  shims: true,

  // 7. 확장자 설정
  // ESM 빌드 결과물은 .mjs, CJS 빌드 결과물은 .js로 생성
  outExtension({ format }) {
    return {
      js: format === 'esm' ? '.mjs' : '.js',
    };
  },
}); 