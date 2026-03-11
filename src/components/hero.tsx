"use client";

import * as React from "react";
import Image from "next/image";
import { Github, Linkedin, Mail, Shield, Target, Cpu, Radar } from "lucide-react";
import { motion } from "framer-motion";
import { site } from "@/content/site";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/motion";

const TITLE_PARTS = [
  "Penetration Tester",
  "CAPT Certified",
  "Boot2Root Player",
  "PQC Researcher",
];

function TypingRole() {
  const [partIdx, setPartIdx] = React.useState(0);
  const [displayed, setDisplayed] = React.useState("");
  const [deleting, setDeleting] = React.useState(false);

  React.useEffect(() => {
    const full = TITLE_PARTS[partIdx];
    let t: ReturnType<typeof setTimeout>;
    if (!deleting) {
      if (displayed.length < full.length) {
        t = setTimeout(() => setDisplayed(full.slice(0, displayed.length + 1)), 65);
      } else {
        t = setTimeout(() => setDeleting(true), 2200);
      }
    } else {
      if (displayed.length > 0) {
        t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 28);
      } else {
        setDeleting(false);
        setPartIdx((p) => (p + 1) % TITLE_PARTS.length);
      }
    }
    return () => clearTimeout(t);
  }, [displayed, deleting, partIdx]);

  return (
    <span className="font-mono text-lg sm:text-xl text-accent">
      {displayed}
      <span className="cursor-blink ml-0.5 inline-block w-[2px] h-[1.1em] align-middle bg-accent" />
    </span>
  );
}

function Avatar() {
  const [hasAvatar, setHasAvatar] = React.useState(true);
  return (
    <div className="relative h-24 w-24 sm:h-28 sm:w-28 shrink-0">
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-accent/25 to-accent2/15 blur-xl scale-110" />
      <div className="relative h-full w-full overflow-hidden rounded-xl border border-accent/30 bg-card/60 shadow-[0_0_28px_hsl(var(--accent)/0.18)]">
        {hasAvatar ? (
          <Image
            src="/avatar.jpg"
            alt={`${site.name} profile photo`}
            fill
            className="object-cover"
            onError={() => setHasAvatar(false)}
            priority
          />
        ) : (
          <div className="h-full w-full bg-gradient-to-br from-accent/15 to-accent2/15 flex items-center justify-center font-display text-2xl font-bold text-accent/50">
            AR
          </div>
        )}
        <div className="absolute inset-0 scanlines" />
      </div>
      <div className="absolute -bottom-1 -right-1 flex items-center gap-1 rounded-full border border-border bg-card px-1.5 py-0.5">
        <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_5px_hsl(var(--accent)/0.9)] animate-pulse" />
        <span className="font-mono text-[9px] text-accent/80">online</span>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <header className="relative overflow-hidden">
      <div className="container-max relative py-16 sm:py-24">
        <FadeIn className="max-w-3xl">
          {/* Kicker */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-3 py-1">
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
            <span className="font-mono text-xs text-accent/80 tracking-widest uppercase">BS Cyber Security · Air University</span>
          </div>

          {/* Avatar + Name */}
          <div className="flex items-center gap-5 sm:gap-6">
            <Avatar />
            <div className="min-w-0">
              <h1 className="h1">
                <span className="glitch neon-text" data-text={site.name}>{site.name}</span>
              </h1>
              <div className="mt-2"><TypingRole /></div>
            </div>
          </div>

          {/* Tagline */}
          <p className="mt-7 max-w-2xl text-base sm:text-lg text-fg/65 leading-relaxed font-light">
            {site.tagline}
          </p>

          {/* Badges */}
          <div className="mt-5 flex flex-wrap gap-2">
            <Badge><Shield  className="h-3.5 w-3.5" /> Penetration Testing</Badge>
            <Badge><Target  className="h-3.5 w-3.5" /> Red Teaming</Badge>
            <Badge><Cpu     className="h-3.5 w-3.5" /> Post-Quantum Crypto</Badge>
            <Badge><Radar   className="h-3.5 w-3.5" /> Agentic AI</Badge>
          </div>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <motion.div whileTap={{ scale: 0.97 }}>
              <Button href="#projects">View Projects</Button>
            </motion.div>
            {[
              { href: site.links.github,      icon: Github,   label: "GitHub" },
              { href: site.links.linkedin,    icon: Linkedin, label: "LinkedIn" },
              { href: `mailto:${site.email}`, icon: Mail,     label: "Email" },
            ].map(({ href, icon: Icon, label }) => (
              <motion.a
                key={label}
                href={href}
                target={label !== "Email" ? "_blank" : undefined}
                rel={label !== "Email" ? "noreferrer" : undefined}
                aria-label={label}
                whileTap={{ scale: 0.95 }}
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card/30 text-muted transition-all hover:border-accent/50 hover:bg-accent/8 hover:text-accent hover:shadow-[0_0_12px_hsl(var(--accent)/0.2)]"
              >
                <Icon className="h-4 w-4" />
              </motion.a>
            ))}
          </div>

          {/* Stat cards */}
          <div className="mt-9 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {site.highlights.map((h) => (
              <div
                key={h.label}
                className="cyber-panel accent-border-top flex flex-col gap-1.5 rounded-xl p-4 transition-all hover:border-accent/40"
              >
                <div className="kicker text-[10px]">{h.label}</div>
                <div className="font-display text-sm font-semibold leading-snug text-fg/90">{h.value}</div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </header>
  );
}
