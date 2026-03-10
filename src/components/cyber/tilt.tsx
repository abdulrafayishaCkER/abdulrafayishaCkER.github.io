"use client";

import * as React from "react";
import { clamp, cn } from "@/lib/utils";

export function Tilt({
  className,
  children,
  max = 10,
}: React.PropsWithChildren<{ className?: string; max?: number }>) {
  const ref = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    const initialEl = ref.current;
    if (!initialEl) return;

    function onMove(e: PointerEvent) {
      if (window.matchMedia("(pointer: coarse)").matches) return;

      const el = ref.current;
      if (!el) return;

      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width;
      const py = (e.clientY - r.top) / r.height;

      const rotY = clamp((px - 0.5) * (max * 2), -max, max);
      const rotX = clamp((0.5 - py) * (max * 2), -max, max);

      el.style.transform = `perspective(900px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateZ(0)`;
    }

    function onLeave() {
      const el = ref.current;
      if (!el) return;

      el.style.transform =
        "perspective(900px) rotateX(0deg) rotateY(0deg) translateZ(0)";
    }

    const el = ref.current;
    if (!el) return;

    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);

    return () => {
      const currentEl = ref.current;
      if (!currentEl) return;

      currentEl.removeEventListener("pointermove", onMove);
      currentEl.removeEventListener("pointerleave", onLeave);
    };
  }, [max]);

  return (
    <div
      ref={ref}
      className={cn(
        "transition-transform duration-200 will-change-transform",
        className
      )}
    >
      {children}
    </div>
  );
}
