"use client";

import * as React from "react";
import { Terminal } from "lucide-react";
import { cn } from "@/lib/utils";
import { site } from "@/content/site";
import { TerminalModal } from "@/components/cyber/terminal";
import { motion } from "framer-motion";

const nav = [
  { id: "experience",     label: "Experience"    },
  { id: "projects",       label: "Projects"      },
  { id: "certifications", label: "Certifications"},
  { id: "about",          label: "About"         },
  { id: "skills",         label: "Skills"        },
  { id: "ctf",            label: "CTF"           },
  { id: "contact",        label: "Contact"       },
];

function useActiveSection() {
  const [active, setActive] = React.useState<string>("");
  React.useEffect(() => {
    const observers: IntersectionObserver[] = [];
    nav.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        (entries) => { entries.forEach((e) => { if (e.isIntersecting) setActive(id); }); },
        { rootMargin: "-35% 0px -60% 0px", threshold: 0.1 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);
  return active;
}

function useScrollProgress() {
  const [p, setP] = React.useState(0);
  React.useEffect(() => {
    let raf: number | null = null;
    const onScroll = () => {
      if (raf) return;
      raf = window.requestAnimationFrame(() => {
        raf = null;
        const doc = document.documentElement;
        const max = Math.max(1, doc.scrollHeight - doc.clientHeight);
        setP(Math.min(1, Math.max(0, doc.scrollTop / max)));
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { if (raf) window.cancelAnimationFrame(raf); window.removeEventListener("scroll", onScroll); };
  }, []);
  return p;
}

export function Navbar() {
  const active = useActiveSection();
  const progress = useScrollProgress();
  const [openTerm, setOpenTerm] = React.useState(false);

  return (
    <>
      <div className="sticky top-0 z-40 border-b border-border/50 bg-bg/80 backdrop-blur-md">
        <div className="container-max flex items-center justify-between py-3">

          {/* Logo — opens terminal */}
          <motion.button
            className="group flex items-center gap-2.5"
            onClick={() => setOpenTerm(true)}
            whileTap={{ scale: 0.97 }}
            title="Open terminal"
          >
            <div className="relative grid h-9 w-9 place-items-center rounded-lg border border-accent/40 bg-accent/10 font-mono text-sm font-bold text-accent transition-all group-hover:border-accent/70 group-hover:bg-accent/15">
              AR
              <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-accent shadow-[0_0_6px_hsl(var(--accent)/0.9)]" />
            </div>
            <div className="leading-tight text-left">
              <div className="font-display text-sm font-semibold text-fg">{site.name}</div>
              <div className="font-mono text-[10px] text-accent/70">
                <Terminal className="mr-1 inline h-2.5 w-2.5" />
                offensive.security
              </div>
            </div>
          </motion.button>

          {/* Nav links */}
          <nav className="hidden items-center gap-0.5 lg:flex">
            {nav.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={cn(
                  "rounded-md px-2.5 py-1.5 font-mono text-[11px] tracking-wide text-fg/55 transition-all hover:text-accent",
                  active === item.id && "bg-accent/8 text-accent"
                )}
              >
                {active === item.id && <span className="mr-1 text-accent/60">›</span>}
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Scroll progress */}
        <div className="h-[1px] w-full bg-border/25">
          <motion.div
            className="h-full bg-gradient-to-r from-accent via-accent2 to-accent"
            initial={false}
            animate={{ width: `${Math.round(progress * 100)}%` }}
            transition={{ type: "spring", stiffness: 140, damping: 22 }}
          />
        </div>
      </div>

      <TerminalModal open={openTerm} onClose={() => setOpenTerm(false)} />
    </>
  );
}
