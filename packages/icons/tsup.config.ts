import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  dts: {
    compilerOptions: {
      jsx: 'react-jsx',
    },
  },
  clean: true,
  sourcemap: true,
  shims: true,
  external: ['react', 'react-dom'], // peerDependencies는 번들에 포함시키지 않음
  outExtension({ format }) {
    return {
      js: format === 'esm' ? '.mjs' : '.cjs',
    };
  },
});