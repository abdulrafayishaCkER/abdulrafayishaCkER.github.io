import { cn } from "@/lib/utils";

export function Shine({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 -z-10 opacity-70",
        className
      )}
      style={{
        background:
          "radial-gradient(800px 400px at 20% 20%, hsl(var(--accent)/0.22), transparent 60%), radial-gradient(700px 350px at 80% 60%, hsl(var(--accent2)/0.22), transparent 60%)",
      }}
    />
  );
}
