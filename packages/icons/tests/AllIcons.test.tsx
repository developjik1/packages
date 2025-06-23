import * as React from 'react';
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { AllIcons } from '../src/index';

describe('All Icons Integration Test', () => {
  it('모든 아이콘이 정상적으로 렌더링되어야 한다', () => {
    Object.entries(AllIcons).forEach(([iconName, IconComponent]) => {
      const { container } = render(<IconComponent data-testid={iconName} />);
      const svgElement = container.querySelector('svg');
      
      expect(svgElement).toBeInTheDocument();
      expect(svgElement).toHaveAttribute('role', 'img');
    });
  });

  it('아이콘 개수가 135개여야 한다', () => {
    expect(Object.keys(AllIcons)).toHaveLength(135);
  });

  it('모든 아이콘 이름이 Icon으로 끝나야 한다', () => {
    Object.keys(AllIcons).forEach(iconName => {
      expect(iconName).toMatch(/Icon$/);
    });
  });
});
