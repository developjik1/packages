import { type JSX } from "react";
import { clsx } from "clsx";

export function Card({
  className,
  title,
  children,
  href,
}: {
  className?: string;
  title: string;
  children: React.ReactNode;
  href: string;
}): JSX.Element {
  const cardStyles = {
    display: "block",
    padding: "1.5rem",
    borderRadius: "0.5rem",
    border: "1px solid #e5e7eb",
    textDecoration: "none",
    color: "inherit",
    transition: "all 0.2s",
    backgroundColor: "white",
    boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
  };

  const titleStyles = {
    fontSize: "1.25rem",
    fontWeight: "600",
    marginBottom: "0.5rem",
    color: "#111827",
  };

  const contentStyles = {
    color: "#6b7280",
    lineHeight: "1.5",
  };

  return (
    <a
      className={clsx(className)}
      style={cardStyles}
      href={`${href}?utm_source=create-turbo&utm_medium=basic&utm_campaign=create-turbo"`}
      rel="noopener noreferrer"
      target="_blank"
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-2px)";
        e.currentTarget.style.boxShadow = "0 4px 12px 0 rgba(0, 0, 0, 0.15)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 1px 3px 0 rgba(0, 0, 0, 0.1)";
      }}
    >
      <h2 style={titleStyles}>
        {title} <span>-&gt;</span>
      </h2>
      <p style={contentStyles}>{children}</p>
    </a>
  );
}
