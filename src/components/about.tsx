"use client";

import { Section } from "@/components/ui/section";
import { Card, CardContent } from "@/components/ui/card";
import { FadeIn } from "@/components/motion";
import { SectionHeader } from "@/components/section-header";
import { GraduationCap, MapPin, Calendar } from "lucide-react";
import { site } from "@/content/site";

export function About() {
  return (
    <Section id="about">
      <div className="container-max">
        <SectionHeader
          kicker="About"
          title="Security that ships and proves itself"
          subtitle="I build things with clear scope, measurable outcomes, and evidence-driven validation — the kind that holds up in a technical interview."
        />

        {/* About paragraphs */}
        <div className="grid gap-4 md:grid-cols-3">
          {site.about.map((p, i) => (
            <FadeIn key={i} delay={i * 0.06}>
              <Card className="h-full">
                <CardContent>
                  <p className="p">{p}</p>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>

        {/* Education */}
        <FadeIn delay={0.1}>
          <div className="mt-6">
            <div className="kicker mb-4">Education</div>
            <div className="grid gap-3 sm:grid-cols-2">
              {site.education.map((e, i) => (
                <div key={i} className="cyber-panel flex items-start gap-4 rounded-xl p-4">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-accent2/25 bg-accent2/8">
                    <GraduationCap className="h-5 w-5 text-accent2" />
                  </div>
                  <div>
                    <div className="font-display text-sm font-semibold text-fg">{e.degree}</div>
                    <div className="mt-0.5 font-mono text-xs text-accent2/80">{e.institution}</div>
                    <div className="mt-1.5 flex flex-wrap gap-3 font-mono text-xs text-muted">
                      <span className="flex items-center gap-1"><Calendar className="h-3 w-3" />{e.period}</span>
                      <span className="flex items-center gap-1"><MapPin className="h-3 w-3" />{e.location}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}
