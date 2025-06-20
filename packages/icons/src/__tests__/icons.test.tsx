import React from 'react';
import { render, screen } from '@testing-library/react';
import { Home, Heart, Search, User, Star } from '../icons';

describe('Icon Components', () => {
  const testIcons = [
    { Component: Home, name: 'Home' },
    { Component: Heart, name: 'Heart' },
    { Component: Search, name: 'Search' },
    { Component: User, name: 'User' },
    { Component: Star, name: 'Star' },
  ];

  testIcons.forEach(({ Component, name }) => {
    describe(name, () => {
      it('renders without crashing', () => {
        const { container } = render(<Component />);
        const svgElement = container.querySelector('svg');
        expect(svgElement).toBeInTheDocument();
      });

      it('accepts size prop', () => {
        const { container } = render(<Component size={32} />);
        const svgElement = container.querySelector('svg');
        expect(svgElement).toHaveAttribute('width', '32');
        expect(svgElement).toHaveAttribute('height', '32');
      });

      it('accepts color prop', () => {
        const { container } = render(<Component color="blue" />);
        const svgElement = container.querySelector('svg');
        expect(svgElement).toHaveAttribute('stroke', 'blue');
      });

      it('accepts className prop', () => {
        const { container } = render(<Component className="test-class" />);
        const svgElement = container.querySelector('svg');
        expect(svgElement).toHaveClass('icon', 'test-class');
      });

      it('has correct default attributes', () => {
        const { container } = render(<Component />);
        const svgElement = container.querySelector('svg');
        expect(svgElement).toHaveAttribute('viewBox', '0 0 24 24');
        expect(svgElement).toHaveAttribute('fill', 'none');
        expect(svgElement).toHaveAttribute('stroke-width', '2');
        expect(svgElement).toHaveAttribute('stroke-linecap', 'round');
        expect(svgElement).toHaveAttribute('stroke-linejoin', 'round');
      });
    });
  });
}); 