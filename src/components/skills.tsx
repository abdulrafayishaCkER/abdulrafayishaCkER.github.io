"use client";

import { Section } from "@/components/ui/section";
import { FadeIn } from "@/components/motion";
import { SectionHeader } from "@/components/section-header";
import { site } from "@/content/site";

const GROUP_META: Record<string, { label: string; color: string }> = {
  offensiveSecurity:     { label: "Offensive Security",        color: "text-accent"  },
  securityTools:         { label: "Security Tools",            color: "text-accent2" },
  developmentAutomation: { label: "Development & Automation",  color: "text-accent"  },
  securityResearch:      { label: "Security Research",         color: "text-accent2" },
};

export function Skills() {
  const entries = Object.entries(site.skills) as Array<[keyof typeof site.skills, readonly string[]]>;

  return (
    <Section id="skills">
      <div className="container-max">
        <SectionHeader
          kicker="Skills"
          title="Technical Skills"
          subtitle="Focused capabilities aligned with penetration testing, web application security, and security automation."
        />

        <div className="grid gap-4 md:grid-cols-2">
          {entries.map(([k, list], idx) => {
            const meta = GROUP_META[String(k)] ?? { label: String(k), color: "text-accent" };
            return (
              <FadeIn key={String(k)} delay={idx * 0.05}>
                <div className="cyber-panel rounded-xl p-5 h-full">
                  <div className={`font-mono text-xs font-semibold uppercase tracking-widest mb-3 ${meta.color}`}>
                    {meta.label}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {list.map((s) => (
                      <span key={s} className="skill-tag">{s}</span>
                    ))}
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
