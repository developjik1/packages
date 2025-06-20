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

// SVG 내용을 React 컴포넌트로 변환하는 함수
function svgToReactComponent(svgContent, componentName) {
  // SVG 태그를 제거하고 내부 요소만 추출
  const svgMatch = svgContent.match(/<svg[^>]*>([\s\S]*?)<\/svg>/);
  if (!svgMatch) {
    throw new Error('Invalid SVG content');
  }

  const innerContent = svgMatch[1].trim();

  return `import React from 'react';
import { Icon } from './Icon';
import { IconComponent } from '../types';

export const ${componentName}: IconComponent = (props) => {
  return (
    <Icon {...props}>
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