"use client";

import { ExternalLink, Github } from "lucide-react";
import { Section } from "@/components/ui/section";
import { FadeIn, Pop } from "@/components/motion";
import { SectionHeader } from "@/components/section-header";
import { Button } from "@/components/ui/button";
import { site } from "@/content/site";
import { Tilt } from "@/components/cyber/tilt";

export function Projects() {
  return (
    <Section id="projects">
      <div className="container-max">
        <SectionHeader
          kicker="Projects"
          title="Security tooling built with evidence"
          subtitle="Two flagship projects in PQC research and cryptographic asset discovery — both oriented toward real enterprise outcomes."
        />

        {/*
          Key layout strategy:
          - grid with items-stretch so both columns are same height
          - each card is flex-col h-full so it fills the row height
          - image container is a FIXED pixel height so both images are identical
          - content area flex-1 so it stretches, with mt-auto on the footer link
        */}
        <div className="grid gap-5 md:grid-cols-2 md:items-stretch">
          {site.projects.map((p, idx) => (
            <Pop key={p.name} delay={idx * 0.05}>
              <Tilt>
                <div className="cyber-panel group flex h-full flex-col overflow-hidden rounded-xl transition-all">

                  {/* Fixed-height image container — identical for both cards */}
                  <div
                    className="relative w-full shrink-0 overflow-hidden border-b border-border/40 bg-[#080e0b]"
                    style={{ height: "220px" }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={p.image}
                      alt={`${p.name} preview`}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block",
                      }}
                    />
                    <div className="absolute inset-0 scanlines pointer-events-none" />
                  </div>

                  {/* Content — grows to fill remaining height */}
                  <div className="flex flex-1 flex-col p-5">
                    <div className="font-display text-base font-semibold neon-text leading-snug">
                      {p.name}
                    </div>
                    <p className="mt-2 text-sm text-fg/65 leading-relaxed">{p.description}</p>

                    {/* Tags */}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {p.tags.map((t) => (
                        <span key={t} className="skill-tag">{t}</span>
                      ))}
                    </div>

                    {/* Bullets */}
                    <ul className="mt-4 space-y-2">
                      {p.bullets.map((b, i) => (
                        <li key={i} className="flex gap-2.5 text-sm text-fg/75 leading-relaxed">
                          <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-accent/60" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Footer link — always at the very bottom */}
                    <div className="mt-auto pt-4 flex flex-wrap gap-2 border-t border-border/30">
                      {p.links.repo ? (
                        <Button
                          href={p.links.repo}
                          variant="outline"
                          className="font-mono text-xs"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Github className="h-3.5 w-3.5" /> Source
                        </Button>
                      ) : null}
                      {p.links.demo ? (
                        <Button
                          href={p.links.demo}
                          variant="outline"
                          className="font-mono text-xs"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <ExternalLink className="h-3.5 w-3.5" /> Demo
                        </Button>
                      ) : null}
                      <Button href="#contact" variant="ghost" className="ml-auto font-mono text-xs">
                        Request walkthrough →
                      </Button>
                    </div>
                  </div>

                </div>
              </Tilt>
            </Pop>
          ))}
        </div>
      </div>
    </Section>
  );
}
