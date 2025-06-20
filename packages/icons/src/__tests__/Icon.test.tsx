import React from 'react';
import { render } from '@testing-library/react';
import { Icon } from '../icons/Icon';

describe('Icon', () => {
  it('renders with default props', () => {
    const { container } = render(
      <Icon>
        <path data-testid="icon-path" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </Icon>
    );
    
    const svgElement = container.querySelector('svg');
    expect(svgElement).toBeInTheDocument();
    expect(svgElement).toHaveAttribute('width', '24');
    expect(svgElement).toHaveAttribute('height', '24');
    expect(svgElement).toHaveAttribute('stroke', 'currentColor');
  });

  it('applies custom size', () => {
    const { container } = render(
      <Icon size={32}>
        <path data-testid="icon-path" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </Icon>
    );
    
    const svgElement = container.querySelector('svg');
    expect(svgElement).toHaveAttribute('width', '32');
    expect(svgElement).toHaveAttribute('height', '32');
  });

  it('applies custom color', () => {
    const { container } = render(
      <Icon color="red">
        <path data-testid="icon-path" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </Icon>
    );
    
    const svgElement = container.querySelector('svg');
    expect(svgElement).toHaveAttribute('stroke', 'red');
  });

  it('applies custom className', () => {
    const { container } = render(
      <Icon className="custom-icon">
        <path data-testid="icon-path" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </Icon>
    );
    
    const svgElement = container.querySelector('svg');
    expect(svgElement).toHaveClass('icon', 'custom-icon');
  });

  it('renders children elements', () => {
    const { getByTestId } = render(
      <Icon>
        <path data-testid="test-path" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </Icon>
    );
    
    expect(getByTestId('test-path')).toBeInTheDocument();
  });
}); 