import * as React from "react";
import { cn } from "@/lib/utils";

type ButtonProps = React.AnchorHTMLAttributes<HTMLAnchorElement> &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: string;
    variant?: "default" | "outline" | "ghost";
    disabled?: boolean;
  };

export function Button({ href, variant = "default", disabled, className, children, ...rest }: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-1.5 rounded-lg px-4 py-2 font-mono text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring select-none";

  const variants = {
    default:
      "border border-accent/50 bg-accent/12 text-accent hover:bg-accent/20 hover:border-accent/70 hover:shadow-[0_0_18px_hsl(var(--accent)/0.25)]",
    outline:
      "border border-border bg-card/30 text-fg/80 hover:border-accent/40 hover:text-accent hover:bg-accent/8 hover:shadow-[0_0_14px_hsl(var(--accent)/0.15)]",
    ghost:
      "border border-transparent text-muted hover:text-accent hover:border-accent/20 hover:bg-accent/6",
  };

  const disabledClass = disabled ? "opacity-40 cursor-not-allowed pointer-events-none" : "";

  if (href && !disabled) {
    return (
      <a href={href} className={cn(base, variants[variant], className)} {...(rest as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    );
  }
  return (
    <button className={cn(base, variants[variant], disabledClass, className)} disabled={disabled} {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
