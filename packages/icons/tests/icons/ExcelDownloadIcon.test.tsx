import * as React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ExcelDownloadIcon } from '../../src/index';

describe('ExcelDownloadIcon', () => {
  it('렌더링되어야 한다', () => {
    render(<ExcelDownloadIcon data-testid="exceldownloadicon" />);
    const icon = screen.getByTestId('exceldownloadicon');
    expect(icon).toBeInTheDocument();
  });

  it('SVG 요소를 포함해야 한다', () => {
    const { container } = render(<ExcelDownloadIcon />);
    const svgElement = container.querySelector('svg');
    expect(svgElement).toBeInTheDocument();
  });

  it('접근성 role 속성을 가져야 한다', () => {
    const { container } = render(<ExcelDownloadIcon />);
    const svgElement = container.querySelector('svg');
    expect(svgElement).toHaveAttribute('role', 'img');
  });

  it('커스텀 props를 전달받을 수 있어야 한다', () => {
    const { container } = render(<ExcelDownloadIcon width={32} height={32} />);
    const svgElement = container.querySelector('svg');
    expect(svgElement).toHaveAttribute('width', '32');
    expect(svgElement).toHaveAttribute('height', '32');
  });

  it('className을 적용할 수 있어야 한다', () => {
    const { container } = render(<ExcelDownloadIcon className="custom-class" />);
    const svgElement = container.querySelector('svg');
    expect(svgElement).toHaveClass('custom-class');
  });
});
