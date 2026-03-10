"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, Terminal } from "lucide-react";
import { cn } from "@/lib/utils";

const scriptLines = [
  "[BOOT]  offensive_security_portfolio v3.0.0",
  "[AUTH]  operator: Abdul Rafay // CAPT-BDO3YR7G",
  "[SCAN]  capabilities.penetration_testing .......... OK",
  "[SCAN]  capabilities.post_quantum_crypto ........... OK",
  "[SCAN]  capabilities.agentic_ai_research ........... OK",
  "[SCAN]  capabilities.threat_hunting ................ OK",
  "[SCAN]  capabilities.ctf_competition ............... OK",
  "[INFO]  internship: Cytomate // Doha, Qatar // PQC & AI",
  "[INFO]  certification: CAPT // Hackviser // Feb 2026",
  "[INFO]  education: Air University // BS CyberSec // 2027",
  "",
  "[READY] System operational. All modules loaded.",
  "[HINT]  Use 'contact' section to initiate connection.",
];

function useTypewriter(open: boolean) {
  const [text, setText] = React.useState("");

  React.useEffect(() => {
    if (!open) {
      setText("");
      return;
    }

    let i = 0;
    const full = scriptLines.join("\n");

    const timer = window.setInterval(() => {
      i += 1;
      setText(full.slice(0, i));
      if (i >= full.length) {
        window.clearInterval(timer);
      }
    }, 14);

    return () => window.clearInterval(timer);
  }, [open]);

  return text;
}

export function TerminalModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const typed = useTypewriter(open);

  React.useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }

    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-[70] grid place-items-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={onClose}
          />

          <motion.div
            initial={{ y: 12, scale: 0.97, opacity: 0 }}
            animate={{ y: 0, scale: 1, opacity: 1 }}
            exit={{ y: 8, scale: 0.97, opacity: 0 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className={cn("cyber-panel w-full max-w-2xl overflow-hidden")}
          >
            <div className="flex items-center justify-between border-b border-border/60 bg-card/60 px-4 py-3">
              <div className="flex items-center gap-2.5">
                <div className="flex gap-1.5">
                  <span className="h-3 w-3 rounded-full bg-red-500/70" />
                  <span className="h-3 w-3 rounded-full bg-yellow-500/70" />
                  <span className="h-3 w-3 rounded-full bg-green-500/70" />
                </div>

                <div className="flex items-center gap-1.5 font-mono text-xs text-muted">
                  <Terminal className="h-3.5 w-3.5" />
                  bash — abdulrafay@kali ~
                </div>
              </div>

              <button
                aria-label="Close terminal"
                onClick={onClose}
                className="inline-flex h-7 w-7 items-center justify-center rounded border border-border/60 bg-card/30 text-muted transition-colors hover:text-fg"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            </div>

            <div className="bg-black/70 p-5">
              <pre className="min-h-[280px] whitespace-pre-wrap font-mono text-xs leading-relaxed text-green-400/90 sm:text-sm">
                {typed}
                <span className="cursor-blink ml-0.5 inline-block h-[0.9em] w-[8px] align-middle bg-green-400/80" />
              </pre>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
