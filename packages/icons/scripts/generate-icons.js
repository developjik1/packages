const fs = require('fs');
const path = require('path');

// SVG 파일들이 들어있는 디렉토리
const svgDir = path.join(__dirname, '../svgs');
const iconsDir = path.join(__dirname, '../src/icons');

// 파스칼 케이스로 변환하는 함수
function toPascalCase(str) {
  return str
    .replace(/[-_](.)/g, (_, char) => char.toUpperCase())
    .replace(/^(.)/, char => char.toUpperCase());
}

// HTML 속성을 JSX 속성으로 변환
function htmlAttrToJsx(content) {
  return content
    // HTML 주석을 JSX 주석으로 변환
    .replace(/<!--([\s\S]*?)-->/g, '{/* $1 */}')
    // CSS 속성들을 camelCase로 변환
    .replace(/\sstop-color=/g, ' stopColor=')
    .replace(/\sclass=/g, ' className=')
    .replace(/\sdata-name=/g, ' data-name=') // data-* 속성은 그대로 유지
    // stroke-* 속성들
    .replace(/\sstroke-width=/g, ' strokeWidth=')
    .replace(/\sstroke-linecap=/g, ' strokeLinecap=')
    .replace(/\sstroke-linejoin=/g, ' strokeLinejoin=')
    .replace(/\sstroke-dasharray=/g, ' strokeDasharray=')
    .replace(/\sstroke-dashoffset=/g, ' strokeDashoffset=')
    // fill-* 속성들
    .replace(/\sfill-rule=/g, ' fillRule=')
    .replace(/\sfill-opacity=/g, ' fillOpacity=')
    // clip-* 속성들
    .replace(/\sclip-path=/g, ' clipPath=')
    .replace(/\sclip-rule=/g, ' clipRule=');
}

// CSS 스타일을 JSX 스타일로 변환
function processCssStyles(content, componentName) {
  // CSS 스타일 블록을 찾고 JSX 형태로 변환
  const styleMatch = content.match(/<style[^>]*>([\s\S]*?)<\/style>/);
  if (styleMatch) {
    const cssContent = styleMatch[1].trim();
    // CSS를 템플릿 리터럴로 감싸기
    const jsxStyle = `<style>
          {\`${cssContent}\`}
        </style>`;
    content = content.replace(styleMatch[0], jsxStyle);
  }

  // ID 충돌 방지를 위해 그라디언트 ID를 컴포넌트별로 고유하게 만들기
  const gradientIdRegex = /id="([^"]+)"/g;
  let match;
  const replacements = new Map();
  
  while ((match = gradientIdRegex.exec(content)) !== null) {
    const originalId = match[1];
    if (!originalId.includes(componentName.toLowerCase())) {
      const newId = `${componentName.toLowerCase()}-${originalId}`;
      replacements.set(originalId, newId);
    }
  }

  // ID 교체 적용
  replacements.forEach((newId, originalId) => {
    // id 속성 교체
    content = content.replace(new RegExp(`id="${originalId}"`, 'g'), `id="${newId}"`);
    // url() 참조 교체
    content = content.replace(new RegExp(`url\\(#${originalId}\\)`, 'g'), `url(#${newId})`);
  });

  return content;
}

// SVG 내용을 React 컴포넌트로 변환하는 함수
function svgToReactComponent(svgContent, componentName) {
  // SVG 태그를 제거하고 내부 요소만 추출
  const svgMatch = svgContent.match(/<svg[^>]*>([\s\S]*?)<\/svg>/);
  if (!svgMatch) {
    throw new Error('Invalid SVG content');
  }

  let innerContent = svgMatch[1].trim();
  
  // viewBox 추출 (복잡한 SVG의 경우 필요)
  const viewBoxMatch = svgContent.match(/viewBox="([^"]+)"/);
  const viewBoxProp = viewBoxMatch ? ` viewBox="${viewBoxMatch[1]}"` : '';

  // HTML 속성을 JSX로 변환
  innerContent = htmlAttrToJsx(innerContent);
  
  // CSS 스타일 처리 및 ID 충돌 방지
  innerContent = processCssStyles(innerContent, componentName);

  return `import { Icon } from './Icon';
import { IconComponent } from '../types';

export const ${componentName}: IconComponent = (props) => {
  return (
    <Icon {...props}${viewBoxProp}>
      ${innerContent}
    </Icon>
  );
};`;
}

// 메인 실행 함수
function generateIcons() {
  if (!fs.existsSync(svgDir)) {
    console.log('SVG 디렉토리가 없습니다. svgs/ 폴더를 만들고 SVG 파일들을 넣어주세요.');
    return;
  }

  // 기존 아이콘 파일들 삭제 (자동 생성된 것들만)
  const files = fs.readdirSync(iconsDir);
  files.forEach(file => {
    if (file.endsWith('.tsx') && file !== 'index.ts') {
      const filePath = path.join(iconsDir, file);
      const content = fs.readFileSync(filePath, 'utf8');
      // 자동 생성된 파일인지 확인
      if (content.includes('// Auto-generated')) {
        fs.unlinkSync(filePath);
      }
    }
  });

  const svgFiles = fs.readdirSync(svgDir).filter(file => file.endsWith('.svg'));
  const exports = [];

  svgFiles.forEach(file => {
    const filePath = path.join(svgDir, file);
    const svgContent = fs.readFileSync(filePath, 'utf8');
    
    const fileName = path.basename(file, '.svg');
    const componentName = toPascalCase(fileName);
    
    try {
      const componentContent = `// Auto-generated from ${file}
${svgToReactComponent(svgContent, componentName)}`;
      
      const outputPath = path.join(iconsDir, `${componentName}.tsx`);
      fs.writeFileSync(outputPath, componentContent);
      exports.push(`export { ${componentName} } from './${componentName}';`);
      
      console.log(`✅ Generated: ${componentName}.tsx`);
    } catch (error) {
      console.error(`❌ Error processing ${file}:`, error.message);
    }
  });

  // 기존 수동 생성된 아이콘들도 포함
  const existingFiles = fs.readdirSync(iconsDir)
    .filter(file => file.endsWith('.tsx') && file !== 'index.ts')
    .map(file => path.basename(file, '.tsx'));

  existingFiles.forEach(fileName => {
    if (!exports.some(exp => exp.includes(fileName))) {
      exports.push(`export { ${fileName} } from './${fileName}';`);
    }
  });

  // index.ts 파일 업데이트
  const indexContent = exports.join('\n');
  fs.writeFileSync(path.join(iconsDir, 'index.ts'), indexContent);
  
  console.log(`\n🎉 총 ${exports.length}개의 아이콘이 생성되었습니다!`);
  console.log('\n사용법:');
  console.log('import { Home, User, Search } from "@developjik1/icons";');
}

generateIcons(); 