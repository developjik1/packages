import { CSSProperties } from "react";

export type StyleVariants<T extends Record<string, any>> = {
  [K in keyof T]: T[K] extends Record<string, any> 
    ? {
        [V in keyof T[K]]: CSSProperties;
      }
    : never;
};

export function createVariants<T extends Record<string, Record<string, CSSProperties>>>(
  variants: T
): T {
  return variants;
}

export function mergeStyles(...styles: (CSSProperties | undefined)[]): CSSProperties {
  return styles.reduce<CSSProperties>((acc, style) => ({ ...acc, ...style }), {});
}

// 조건부 스타일 적용
export function conditionalStyle(
  condition: boolean, 
  trueStyle: CSSProperties, 
  falseStyle?: CSSProperties
): CSSProperties {
  return condition ? trueStyle : (falseStyle || {});
}

// 반응형 스타일을 위한 미디어 쿼리 헬퍼
export function createResponsiveStyle(styles: {
  base?: CSSProperties;
  sm?: CSSProperties;
  md?: CSSProperties;
  lg?: CSSProperties;
}): CSSProperties {
  // 이는 실제 미디어 쿼리가 아닌 기본값만 반환
  // 실제 반응형은 CSS-in-JS 라이브러리나 CSS를 통해 구현해야 함
  return styles.base || {};
} 