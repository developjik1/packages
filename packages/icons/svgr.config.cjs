const { transform } = require('@svgr/core');
const fs = require('fs');
const path = require('path');

const assetsDir = path.join(__dirname, 'assets/svg');
const outputDir = path.join(__dirname, 'src/components');

// 출력 디렉토리 생성
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// 파스칼 케이스로 변환하는 함수
function toPascalCase(str) {
  return str
    .replace(/[^a-zA-Z0-9]/g, ' ')
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join('');
}

// 개별 스토리 파일 생성
function generateStory(componentName) {
  return `
import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ${componentName} } from '../../index';

const meta: Meta<typeof ${componentName}> = {
  title: 'Icons/${componentName}',
  component: ${componentName},
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    width: {
      control: { type: 'number', min: 16, max: 128 },
      defaultValue: 24,
    },
    height: {
      control: { type: 'number', min: 16, max: 128 },
      defaultValue: 24,
    },
    color: {
      control: 'color',
      defaultValue: 'currentColor',
    },
  },
  render: (args) => (
    <div style={{ color: args.color }}>
      <${componentName} {...args} />
    </div>
  ),
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    width: 24,
    height: 24,
  },
};

export const Small: Story = {
  args: {
    width: 16,
    height: 16,
  },
};

export const Large: Story = {
  args: {
    width: 48,
    height: 48,
  },
};

export const CustomColor: Story = {
  args: {
    width: 32,
    height: 32,
    color: '#007bff',
  },
};
`;
}

// 개별 테스트 파일 생성
function generateTest(componentName) {
  return `import * as React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ${componentName} } from '../../src/index';

describe('${componentName}', () => {
  it('렌더링되어야 한다', () => {
    render(<${componentName} data-testid="${componentName.toLowerCase()}" />);
    const icon = screen.getByTestId('${componentName.toLowerCase()}');
    expect(icon).toBeInTheDocument();
  });

  it('SVG 요소를 포함해야 한다', () => {
    const { container } = render(<${componentName} />);
    const svgElement = container.querySelector('svg');
    expect(svgElement).toBeInTheDocument();
  });

  it('접근성 role 속성을 가져야 한다', () => {
    const { container } = render(<${componentName} />);
    const svgElement = container.querySelector('svg');
    expect(svgElement).toHaveAttribute('role', 'img');
  });

  it('커스텀 props를 전달받을 수 있어야 한다', () => {
    const { container } = render(<${componentName} width={32} height={32} />);
    const svgElement = container.querySelector('svg');
    expect(svgElement).toHaveAttribute('width', '32');
    expect(svgElement).toHaveAttribute('height', '32');
  });

  it('className을 적용할 수 있어야 한다', () => {
    const { container } = render(<${componentName} className="custom-class" />);
    const svgElement = container.querySelector('svg');
    expect(svgElement).toHaveClass('custom-class');
  });
});
`;
}

// SVG 파일들을 React 컴포넌트로 변환
async function generateComponents() {
  const svgFiles = fs.readdirSync(assetsDir).filter(file => file.endsWith('.svg'));
  const exports = [];

  // 디렉토리 생성
  const storiesDir = path.join(__dirname, 'src/stories/icons');
  const testsDir = path.join(__dirname, 'tests/icons');
  
  if (!fs.existsSync(storiesDir)) {
    fs.mkdirSync(storiesDir, { recursive: true });
  }
  if (!fs.existsSync(testsDir)) {
    fs.mkdirSync(testsDir, { recursive: true });
  }

  for (const file of svgFiles) {
    const svgContent = fs.readFileSync(path.join(assetsDir, file), 'utf8');
    const componentName = toPascalCase(path.basename(file, '.svg')) + 'Icon';
    
    try {
      const jsCode = await transform(
        svgContent,
        {
          typescript: true,
          jsxRuntime: 'automatic',
          plugins: ['@svgr/plugin-jsx', '@svgr/plugin-prettier'],
          jsxRuntimeImport: {
            source: 'react',
            namespace: 'React', 
          },
          prettier: true,
          prettierConfig: {
            semi: true,
            singleQuote: true,
            trailingComma: 'es5',
          },
          svgProps: {
            role: 'img',
          },
          replaceAttrValues: {
            '#000': 'currentColor',
            '#000000': 'currentColor',
            '#29313D': 'currentColor',
          },
          template: (variables, { tpl }) => {
            return tpl`
              ${variables.imports};
              ${variables.interfaces};
              const ${variables.componentName} = (${variables.props}) => {
                return ${variables.jsx};
              };
              ${variables.exports};
            `;
          },
          svgoConfig: {
            plugins: [
              {
                name: 'preset-default',
                params: {
                  overrides: {
                    removeViewBox: false,
                  },
                },
              },
              {
                name: 'convertColors',
                params: {
                  currentColor: true,
                },
              },
            ],
          },
        },
        { componentName }
      );

      const componentCode = jsCode;

      // 컴포넌트 파일 생성
      fs.writeFileSync(
        path.join(outputDir, `${componentName}.tsx`),
        componentCode
      );

      // 스토리 파일 생성
      fs.writeFileSync(
        path.join(storiesDir, `${componentName}.stories.tsx`),
        generateStory(componentName)
      );

      // 테스트 파일 생성
      fs.writeFileSync(
        path.join(testsDir, `${componentName}.test.tsx`),
        generateTest(componentName)
      );

      exports.push(`import ${componentName} from './components/${componentName}';`);
      console.log(`✅ Generated: ${componentName}.tsx + story + test`);
    } catch (error) {
      console.error(`❌ Failed to generate ${componentName}:`, error);
    }
  }

  // index.ts 파일 생성
  const allIconNames = svgFiles.map(file => toPascalCase(path.basename(file, '.svg')) + 'Icon');
  
  const indexContent = `// Auto-generated icon components
${exports.join('\n')}

// 개별 아이콘들을 named export로 내보내기
${allIconNames.map(name => `export { default as ${name} } from './components/${name}';`).join('\n')}

// 모든 아이콘을 하나의 객체로 export
export const AllIcons = {
${allIconNames.map(name => `  ${name},`).join('\n')}
};

// 아이콘 타입 정의
export type IconName = keyof typeof AllIcons;
`;

  fs.writeFileSync(path.join(__dirname, 'src/index.ts'), indexContent);

    // 통합 테스트 파일 생성
  const allTestContent = `import * as React from 'react';
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

  it('아이콘 개수가 ${svgFiles.length}개여야 한다', () => {
    expect(Object.keys(AllIcons)).toHaveLength(${svgFiles.length});
  });

  it('모든 아이콘 이름이 Icon으로 끝나야 한다', () => {
    Object.keys(AllIcons).forEach(iconName => {
      expect(iconName).toMatch(/Icon$/);
    });
  });
});
`;

  fs.writeFileSync(path.join(__dirname, 'tests/AllIcons.test.tsx'), allTestContent);

  console.log(`✅ Generated index.ts with ${exports.length} icons`);
  console.log(`✅ Generated ${svgFiles.length} individual stories`);
  console.log(`✅ Generated ${svgFiles.length} individual tests + integration test`);
}

generateComponents().catch(console.error); 