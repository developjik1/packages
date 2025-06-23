import * as React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { AddCircleFilledIcon } from '../../src/index';

describe('AddCircleFilledIcon', () => {
  it('렌더링되어야 한다', () => {
    render(<AddCircleFilledIcon data-testid="addcirclefilledicon" />);
    const icon = screen.getByTestId('addcirclefilledicon');
    expect(icon).toBeInTheDocument();
  });

  it('SVG 요소를 포함해야 한다', () => {
    const { container } = render(<AddCircleFilledIcon />);
    const svgElement = container.querySelector('svg');
    expect(svgElement).toBeInTheDocument();
  });

  it('접근성 role 속성을 가져야 한다', () => {
    const { container } = render(<AddCircleFilledIcon />);
    const svgElement = container.querySelector('svg');
    expect(svgElement).toHaveAttribute('role', 'img');
  });

  it('커스텀 props를 전달받을 수 있어야 한다', () => {
    const { container } = render(<AddCircleFilledIcon width={32} height={32} />);
    const svgElement = container.querySelector('svg');
    expect(svgElement).toHaveAttribute('width', '32');
    expect(svgElement).toHaveAttribute('height', '32');
  });

  it('className을 적용할 수 있어야 한다', () => {
    const { container } = render(<AddCircleFilledIcon className="custom-class" />);
    const svgElement = container.querySelector('svg');
    expect(svgElement).toHaveClass('custom-class');
  });
});
