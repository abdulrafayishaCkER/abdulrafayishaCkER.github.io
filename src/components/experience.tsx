"use client";

import { Section } from "@/components/ui/section";
import { FadeIn } from "@/components/motion";
import { SectionHeader } from "@/components/section-header";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar } from "lucide-react";
import { site } from "@/content/site";

export function Experience() {
  return (
    <Section id="experience" className="relative">
      <div className="container-max">
        <SectionHeader
          kicker="Experience"
          title="Real-world research & development"
          subtitle="Focused on systems enterprises actually care about: cryptographic inventory, blast-radius containment, and controlled post-quantum migration."
        />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-5 top-0 bottom-0 w-px timeline-line hidden sm:block" />

          {site.experience.map((e, idx) => (
            <FadeIn key={idx} delay={idx * 0.06}>
              <div className="relative mb-6 sm:pl-14">
                {/* Timeline dot */}
                <div className="absolute left-3 top-6 hidden h-4 w-4 -translate-x-1/2 sm:flex items-center justify-center">
                  <span className="h-3 w-3 rounded-full border-2 border-accent bg-bg shadow-[0_0_10px_hsl(var(--accent)/0.6)]" />
                </div>

                <div className="cyber-panel accent-border-top rounded-xl p-6 transition-all">
                  {/* Header */}
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <div className="font-display text-lg font-semibold text-fg">{e.title}</div>
                      <div className="mt-1 font-mono text-sm font-semibold text-accent">{e.org}</div>
                    </div>
                    <div className="flex flex-col gap-1.5 sm:items-end shrink-0">
                      <Badge className="w-fit font-mono text-xs">
                        <Calendar className="mr-1 h-3 w-3" />
                        {e.period}
                      </Badge>
                      <div className="flex items-center gap-1 text-xs text-muted">
                        <MapPin className="h-3 w-3" />
                        {e.location}
                      </div>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="my-4 h-px bg-gradient-to-r from-accent/20 to-transparent" />

                  {/* Bullets */}
                  <ul className="space-y-3">
                    {e.bullets.map((b, i) => (
                      <li key={i} className="flex gap-3 text-sm text-fg/80 leading-relaxed">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/70" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </Section>
  );
}
