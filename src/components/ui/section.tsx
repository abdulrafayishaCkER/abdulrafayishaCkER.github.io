import * as React from "react";
import { cn } from "@/lib/utils";

export function Section({ id, className, children }: React.HTMLAttributes<HTMLElement>) {
  return (
    <section id={id} className={cn("py-16 sm:py-20", className)}>
      {children}
    </section>
  );
}
