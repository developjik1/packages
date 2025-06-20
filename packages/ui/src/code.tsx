import { type JSX } from "react";
import { clsx } from "clsx";

export function Code({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}): JSX.Element {
  const codeStyles = {
    fontFamily: 'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
    fontSize: "0.875rem",
    backgroundColor: "#f3f4f6",
    color: "#1f2937",
    padding: "0.25rem 0.5rem",
    borderRadius: "0.25rem",
    border: "1px solid #d1d5db",
  };

  return (
    <code 
      className={clsx(className)} 
      style={codeStyles}
    >
      {children}
    </code>
  );
}
