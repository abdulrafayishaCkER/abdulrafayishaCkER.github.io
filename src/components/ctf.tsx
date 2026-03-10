"use client";

import { Section } from "@/components/ui/section";
import { FadeIn } from "@/components/motion";
import { SectionHeader } from "@/components/section-header";
import { Terminal, Flag } from "lucide-react";
import { site } from "@/content/site";

const PLATFORMS = [
  { name: "Hack The Box",  handle: "abdulrafay",  color: "text-green-400" },
  { name: "TryHackMe",     handle: "abdulrafay",  color: "text-red-400"   },
];

export function CTF() {
  return (
    <Section id="ctf">
      <div className="container-max">
        <SectionHeader
          kicker="Practice"
          title={site.ctf.title}
          subtitle="Sharpening offensive tradecraft through structured competition and hands-on lab practice."
        />

        <FadeIn>
          <div className="cyber-panel accent-border-top rounded-xl p-6">
            <div className="flex flex-col gap-6 md:flex-row md:gap-10">
              {/* Approach bullets */}
              <div className="flex-1">
                <div className="mb-4 flex items-center gap-2">
                  <Terminal className="h-4 w-4 text-accent" />
                  <span className="font-mono text-xs font-semibold uppercase tracking-widest text-accent">Methodology</span>
                </div>
                <ul className="space-y-3">
                  {site.ctf.bullets.map((b, i) => (
                    <li key={i} className="flex gap-3 text-sm text-fg/80 leading-relaxed">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/70" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Platform badges */}
              <div className="shrink-0">
                <div className="mb-4 flex items-center gap-2">
                  <Flag className="h-4 w-4 text-accent2" />
                  <span className="font-mono text-xs font-semibold uppercase tracking-widest text-accent2">Platforms</span>
                </div>
                <div className="flex flex-col gap-2">
                  {PLATFORMS.map((p) => (
                    <div key={p.name} className="flex items-center gap-3 rounded-lg border border-border/60 bg-card/40 px-4 py-2.5">
                      <div className={`font-display text-sm font-semibold ${p.color}`}>{p.name}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}
