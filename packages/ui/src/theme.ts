export interface Theme {
  colors?: {
    primary?: string;
    secondary?: string;
    text?: string;
    background?: string;
  };
  spacing?: {
    sm?: string;
    md?: string;
    lg?: string;
  };
  borderRadius?: string;
  fontFamily?: string;
}

export function createTheme(theme: Theme): Record<string, string> {
  const cssVariables: Record<string, string> = {};

  if (theme.colors?.primary) {
    cssVariables['--ui-button-primary-bg'] = theme.colors.primary;
  }
  
  if (theme.colors?.secondary) {
    cssVariables['--ui-button-secondary-bg'] = theme.colors.secondary;
  }

  if (theme.colors?.text) {
    cssVariables['--ui-button-primary-color'] = theme.colors.text;
  }

  if (theme.spacing?.sm) {
    cssVariables['--ui-button-padding-sm'] = theme.spacing.sm;
  }

  if (theme.spacing?.md) {
    cssVariables['--ui-button-padding-md'] = theme.spacing.md;
  }

  if (theme.spacing?.lg) {
    cssVariables['--ui-button-padding-lg'] = theme.spacing.lg;
  }

  if (theme.borderRadius) {
    cssVariables['--ui-button-radius'] = theme.borderRadius;
  }

  if (theme.fontFamily) {
    cssVariables['--ui-font-family'] = theme.fontFamily;
  }

  return cssVariables;
}

export function applyTheme(theme: Theme, element?: HTMLElement) {
  const cssVariables = createTheme(theme);
  const target = element || document.documentElement;

  Object.entries(cssVariables).forEach(([property, value]) => {
    target.style.setProperty(property, value);
  });
} 