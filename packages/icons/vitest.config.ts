import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom', // 브라우저 환경을 시뮬레이션
    globals: true,
    setupFiles: './tests/setup.ts', // 필요 시 설정 파일
    typecheck: {
      include: ['tests/**/*.test.*']
    }
  },
});