"use client";

import { ReactNode, CSSProperties } from "react";
import { clsx } from "clsx";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  appName: string;
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
}

export const Button = ({ 
  children, 
  className, 
  style,
  appName, 
  variant = "primary",
  size = "md"
}: ButtonProps) => {
  const baseStyles: CSSProperties = {
    borderRadius: "var(--ui-button-radius, 0.375rem)",
    fontWeight: "500",
    border: "none",
    cursor: "pointer",
    transition: "all 0.2s",
    fontFamily: "var(--ui-font-family, inherit)",
  };

  const sizeStyles = {
    sm: {
      padding: "var(--ui-button-padding-sm, 0.375rem 0.75rem)",
      fontSize: "var(--ui-button-font-size-sm, 0.875rem)",
    },
    md: {
      padding: "var(--ui-button-padding-md, 0.5rem 1rem)",
      fontSize: "var(--ui-button-font-size-md, 1rem)",
    },
    lg: {
      padding: "var(--ui-button-padding-lg, 0.75rem 1.5rem)",
      fontSize: "var(--ui-button-font-size-lg, 1.125rem)",
    },
  };

  const variantStyles = {
    primary: {
      backgroundColor: "var(--ui-button-primary-bg, #3b82f6)",
      color: "var(--ui-button-primary-color, white)",
    },
    secondary: {
      backgroundColor: "var(--ui-button-secondary-bg, #e5e7eb)",
      color: "var(--ui-button-secondary-color, #374151)",
    },
  };

  return (
    <button
      className={clsx("ui-button", `ui-button--${variant}`, `ui-button--${size}`, className)}
      style={{
        ...baseStyles,
        ...sizeStyles[size],
        ...variantStyles[variant],
        ...style,
      }}
      onClick={() => alert(`Hello from your ${appName} app!`)}
    >
      {children}
    </button>
  );
};
