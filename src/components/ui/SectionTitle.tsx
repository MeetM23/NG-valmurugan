import type { ReactNode } from "react";

interface SectionTitleProps {
  children: ReactNode;
  as?: "h2" | "h3";
  tone?: "dark" | "light";
  size?: "md" | "lg";
  line?: boolean;
  lineColor?: string;
  className?: string;
}

/** Section heading followed by the short green rule seen across the reference pages. */
export function SectionTitle({
  children,
  as: Tag = "h2",
  tone = "dark",
  size = "md",
  line = true,
  lineColor,
  className = "",
}: SectionTitleProps) {
  return (
    <Tag
      className={`flex items-center gap-4 font-semibold leading-tight ${
        size === "lg" ? "text-[28px] lg:text-[32px]" : "text-[22px] lg:text-[24px]"
      } ${tone === "light" ? "text-white" : "text-ink"} ${className}`}
    >
      <span>{children}</span>
      {line && (
        <span
          aria-hidden
          className={`mt-1 hidden h-[2px] w-10 shrink-0 sm:block ${
            lineColor ?? (tone === "light" ? "bg-brand-400" : "bg-brand-600")
          }`}
        />
      )}
    </Tag>
  );
}

export function Eyebrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <p className={`text-[11px] font-semibold uppercase tracking-[0.12em] text-brand-600 ${className}`}>
      {children}
    </p>
  );
}
