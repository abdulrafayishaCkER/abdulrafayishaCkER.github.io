"use client";

import { Section } from "@/components/ui/section";
import { FadeIn } from "@/components/motion";
import { SectionHeader } from "@/components/section-header";
import { site } from "@/content/site";

const GROUP_META: Record<string, { label: string; color: string }> = {
  offensive:          { label: "Offensive Security",       color: "text-accent"  },
  securityEngineering:{ label: "Security Engineering",     color: "text-accent2" },
  pqc:               { label: "Post-Quantum Cryptography", color: "text-accent"  },
  programming:       { label: "Programming & Tools",       color: "text-accent2" },
  ml:                { label: "AI & Machine Learning",     color: "text-accent"  },
};

export function Skills() {
  const entries = Object.entries(site.skills) as Array<[keyof typeof site.skills, readonly string[]]>;

  return (
    <Section id="skills">
      <div className="container-max">
        <SectionHeader
          kicker="Skills"
          title="Tools & areas I operate in"
          subtitle="Depth over buzzwords — every item listed is something I can discuss technically and back with project evidence."
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
