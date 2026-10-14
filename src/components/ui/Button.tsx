import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ComponentProps } from "react";

type Variant = "solid" | "outline" | "outline-light";

const VARIANTS: Record<Variant, string> = {
  solid: "bg-brand-600 text-white hover:bg-brand-700 border border-brand-600 hover:border-brand-700",
  outline: "bg-white text-brand-700 border border-brand-600 hover:bg-brand-50",
  "outline-light": "bg-transparent text-white border border-white/70 hover:bg-white/10",
};

interface ButtonProps extends Omit<ComponentProps<typeof Link>, "className"> {
  variant?: Variant;
  arrow?: boolean;
  className?: string;
  size?: "sm" | "md";
}

export function Button({
  variant = "solid",
  arrow = true,
  size = "md",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const sizing = size === "sm" ? "h-9 px-4 text-[13px]" : "h-11 px-5 text-sm";
  return (
    <Link
      {...props}
      className={`inline-flex items-center justify-center gap-2 rounded-[4px] font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 ${sizing} ${VARIANTS[variant]} ${className}`}
    >
      {children}
      {arrow && <ArrowRight aria-hidden className="size-4" strokeWidth={2} />}
    </Link>
  );
}
