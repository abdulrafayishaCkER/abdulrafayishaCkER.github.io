import * as React from "react";
import { cn } from "@/lib/utils";

export function Badge({ className, children, ...props }: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-md border border-accent/20 bg-accent/8 px-2.5 py-1 font-mono text-xs text-accent/90 transition-all hover:border-accent/40 hover:bg-accent/12",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
