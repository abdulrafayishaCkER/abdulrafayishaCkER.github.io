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
    const el = ref.current;
    if (!el) return;

    function onMove(e: PointerEvent) {
      // Skip on coarse pointers (mobile)
      if (window.matchMedia("(pointer: coarse)").matches) return;

      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width;
      const py = (e.clientY - r.top) / r.height;

      const rotY = clamp((px - 0.5) * (max * 2), -max, max);
      const rotX = clamp((0.5 - py) * (max * 2), -max, max);

      el.style.transform = `perspective(900px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateZ(0)`;
    }
    function onLeave() {
      el.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg) translateZ(0)";
    }

    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);

    return () => {
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
    };
  }, [max]);

  return (
    <div
      ref={ref}
      className={cn("transition-transform duration-200 will-change-transform", className)}
    >
      {children}
    </div>
  );
}
