"use client";

import * as React from "react";
import { Mail, Copy, Check, ArrowUpRight, Github, Linkedin } from "lucide-react";
import { Section } from "@/components/ui/section";
import { FadeIn } from "@/components/motion";
import { SectionHeader } from "@/components/section-header";
import { Button } from "@/components/ui/button";
import { site } from "@/content/site";

export function Contact() {
  const [copied, setCopied] = React.useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch { /* no-op */ }
  }

  return (
    <Section id="contact">
      <div className="container-max">
        <SectionHeader
          kicker="Contact"
          title="Let's connect"
          subtitle="Interested in a walkthrough of my PQC research, security tooling, or available for penetration testing roles."
        />

        <FadeIn>
          <div className="cyber-panel accent-border-top rounded-xl p-6 sm:p-8">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="font-mono text-xs text-muted uppercase tracking-widest mb-2">Primary Contact</div>
                <button
                  onClick={copyEmail}
                  className="group flex items-center gap-2 font-mono text-base font-medium text-fg transition-colors hover:text-accent"
                >
                  <Mail className="h-4 w-4 text-muted group-hover:text-accent" />
                  {site.email}
                  <span className="ml-1">
                    {copied
                      ? <Check className="h-3.5 w-3.5 text-accent" />
                      : <Copy className="h-3.5 w-3.5 text-muted" />
                    }
                  </span>
                </button>
                <div className="mt-1 font-mono text-xs text-muted">Click to copy</div>
              </div>

              <div className="flex flex-wrap gap-2">
                <Button variant="outline" onClick={copyEmail} className="font-mono text-xs">
                  {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                  {copied ? "Copied!" : "Copy Email"}
                </Button>
                <Button
                  href={site.links.linkedin}
                  variant="outline"
                  className="font-mono text-xs"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Linkedin className="h-3.5 w-3.5" />
                  LinkedIn <ArrowUpRight className="h-3.5 w-3.5" />
                </Button>
                <Button
                  href={site.links.github}
                  variant="outline"
                  className="font-mono text-xs"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Github className="h-3.5 w-3.5" />
                  GitHub <ArrowUpRight className="h-3.5 w-3.5" />
                </Button>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}
