import { render } from '@testing-library/react';
import { 
  Home, 
  Heart, 
  Search, 
  User, 
  Star, 
  Bell,
  Menu,
  Plus,
  X,
  ChevronDown,
  Apartment,
  Add,
  AddCircle,
  AddCircleFilled,
  Colosseum
} from '../icons';

describe('Icon Components', () => {
  // 기본 24x24 stroke 아이콘들
  const strokeIcons = [
    { Component: Heart, name: 'Heart' },
    { Component: Star, name: 'Star' },
    { Component: Bell, name: 'Bell' },
  ];

  // 24x24 fill 아이콘들  
  const fillIcons = [
    { Component: Add, name: 'Add' },
    { Component: AddCircle, name: 'AddCircle' },
    { Component: AddCircleFilled, name: 'AddCircleFilled' },
  ];

  // 수동 생성된 아이콘들
  const manualIcons = [
    { Component: Home, name: 'Home' },
    { Component: Search, name: 'Search' },
    { Component: User, name: 'User' },
    { Component: Menu, name: 'Menu' },
    { Component: Plus, name: 'Plus' },
    { Component: X, name: 'X' },
    { Component: ChevronDown, name: 'ChevronDown' },
  ];

  // 모든 아이콘 공통 테스트
  const allIcons = [
    ...strokeIcons,
    ...fillIcons, 
    ...manualIcons,
    { Component: Apartment, name: 'Apartment' },
    { Component: Colosseum, name: 'Colosseum' }
  ];

  allIcons.forEach(({ Component, name }) => {
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

      it('accepts className prop', () => {
        const { container } = render(<Component className="test-class" />);
        const svgElement = container.querySelector('svg');
        expect(svgElement).toHaveClass('icon', 'test-class');
      });
    });
  });

  // Stroke 아이콘들 (24x24, stroke 속성)
  strokeIcons.forEach(({ Component, name }) => {
    describe(`${name} (stroke icon)`, () => {
      it('has correct stroke attributes', () => {
        const { container } = render(<Component />);
        const svgElement = container.querySelector('svg');
        expect(svgElement).toHaveAttribute('viewBox', '0 0 24 24');
        expect(svgElement).toHaveAttribute('fill', 'none');
        expect(svgElement).toHaveAttribute('stroke', 'currentColor');
        expect(svgElement).toHaveAttribute('stroke-width', '2');
        expect(svgElement).toHaveAttribute('stroke-linecap', 'round');
        expect(svgElement).toHaveAttribute('stroke-linejoin', 'round');
      });

      it('accepts color prop for stroke', () => {
        const { container } = render(<Component color="blue" />);
        const svgElement = container.querySelector('svg');
        expect(svgElement).toHaveAttribute('stroke', 'blue');
      });
    });
  });

  // Fill 아이콘들 (24x24, fill 속성)
  fillIcons.forEach(({ Component, name }) => {
    describe(`${name} (fill icon)`, () => {
      it('has correct fill attributes', () => {
        const { container } = render(<Component />);
        const svgElement = container.querySelector('svg');
        expect(svgElement).toHaveAttribute('viewBox', '0 0 24 24');
        expect(svgElement).toHaveAttribute('fill', 'none');
      });
    });
  });

  // Apartment 아이콘 (20x20)
  describe('Apartment (special case)', () => {
    it('has correct 20x20 viewBox', () => {
      const { container } = render(<Apartment />);
      const svgElement = container.querySelector('svg');
      expect(svgElement).toHaveAttribute('viewBox', '0 0 20 20');
      expect(svgElement).toHaveAttribute('fill', 'none');
    });
  });

  // Colosseum 아이콘 (로고 형태)
  describe('Colosseum (logo)', () => {
    it('has correct large viewBox', () => {
      const { container } = render(<Colosseum />);
      const svgElement = container.querySelector('svg');
      expect(svgElement).toHaveAttribute('viewBox', '0 0 769.57 120.65');
    });

    it('contains gradient definitions', () => {
      const { container } = render(<Colosseum />);
      const gradientElement = container.querySelector('linearGradient');
      expect(gradientElement).toBeInTheDocument();
    });
  });
}); 