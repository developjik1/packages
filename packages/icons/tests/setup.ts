import * as React from 'react';
import '@testing-library/jest-dom';
import { beforeAll, afterAll } from 'vitest';

// React 18 strict mode와 관련된 warning을 억제
const originalError = console.error;
beforeAll(() => {
  console.error = (...args: any[]) => {
    if (
      typeof args[0] === 'string' &&
      args[0].includes('Warning: ReactDOM.render is deprecated')
    ) {
      return;
    }
    originalError(...args);
  };
});

afterAll(() => {
  console.error = originalError;
}); 