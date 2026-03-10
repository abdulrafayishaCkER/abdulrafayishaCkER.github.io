import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  kicker: string;
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionHeader({ kicker, title, subtitle, className }: SectionHeaderProps) {
  return (
    <div className={cn("mb-8", className)}>
      <div className="kicker">{kicker}</div>
      <h2 className="h2 mt-2 text-fg">{title}</h2>
      <div className="section-divider mt-3" />
      {subtitle && (
        <p className="mt-4 max-w-2xl text-sm sm:text-base text-fg/60 leading-relaxed font-light">
          {subtitle}
        </p>
      )}
    </div>
  );
}
