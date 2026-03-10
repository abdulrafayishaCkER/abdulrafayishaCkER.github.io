"use client";

import { Award, Calendar, Hash } from "lucide-react";
import { Section } from "@/components/ui/section";
import { FadeIn } from "@/components/motion";
import { SectionHeader } from "@/components/section-header";
import { site } from "@/content/site";

const ISSUER_COLOR: Record<string, string> = {
  "Hackviser":  "text-accent",
  "EC-Council": "text-red-400",
  "IBM":        "text-blue-400",
};

export function Certifications() {
  return (
    <Section id="certifications">
      <div className="container-max">
        <SectionHeader
          kicker="Certifications"
          title="Validated competencies"
          subtitle="Industry-recognized credentials across penetration testing, ethical hacking, and cryptography."
        />

        <div className="grid gap-4 sm:grid-cols-3">
          {site.certifications.map((cert, idx) => (
            <FadeIn key={cert.name} delay={idx * 0.07}>
              <div className="cert-card group relative flex h-full flex-col gap-4 rounded-xl p-5 transition-all">
                {/* Top accent line animates on hover */}
                <div className="absolute top-0 left-0 right-0 h-[2px] rounded-t-xl bg-gradient-to-r from-transparent via-gold/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

                {/* Icon + issuer */}
                <div className="flex items-start justify-between gap-3">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-gold/20 bg-gold/5">
                    <Award className="h-5 w-5 text-gold" />
                  </div>
                  <span className={`font-mono text-xs font-semibold ${ISSUER_COLOR[cert.issuer] ?? "text-muted"}`}>
                    {cert.issuer}
                  </span>
                </div>

                {/* Name */}
                <div className="font-display text-sm font-semibold leading-snug text-fg/95">
                  {cert.name}
                </div>

                {/* Meta */}
                <div className="mt-auto space-y-1.5">
                  <div className="flex items-center gap-1.5 font-mono text-xs text-muted">
                    <Calendar className="h-3 w-3" />
                    Issued {cert.issued}
                  </div>
                  {cert.credentialId ? (
                    <div className="flex items-center gap-1.5 font-mono text-xs text-muted">
                      <Hash className="h-3 w-3" />
                      {cert.credentialId}
                    </div>
                  ) : null}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1">
                  {cert.tags.map((t) => (
                    <span key={t} className="rounded border border-border/60 bg-card/40 px-2 py-0.5 font-mono text-[10px] text-muted">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </Section>
  );
}
