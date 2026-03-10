"use client";

import * as React from "react";

/* ─────────────────────────────────────────────
   High-performance animated cyber background
   • Particle network  (matrix green)
   • Drifting hexagons (wireframe)
   • Radar sweep arc
   ───────────────────────────────────────────── */

type Point = { x: number; y: number; vx: number; vy: number; r: number };

type Hex = {
  x: number; y: number;
  size: number;
  vx: number; vy: number;
  rotation: number; rotSpeed: number;
  alpha: number;
};

function rand(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

function hexPath(cx: number, cy: number, size: number, rotation: number): [number, number][] {
  const pts: [number, number][] = [];
  for (let i = 0; i < 6; i++) {
    const angle = (Math.PI / 3) * i + rotation;
    pts.push([cx + size * Math.cos(angle), cy + size * Math.sin(angle)]);
  }
  return pts;
}

export function CyberBackground() {
  const canvasRef = React.useRef<HTMLCanvasElement | null>(null);
  const rafRef    = React.useRef<number | null>(null);
  const stateRef  = React.useRef({
    points: [] as Point[],
    hexes:  [] as Hex[],
    radar:  0,          // current radar angle (radians)
    pointer: { x: -9999, y: -9999, pulse: 0 },
    w: 0, h: 0, dpr: 1,
  });

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const S = stateRef.current;

    function spawnHexes(w: number, h: number): Hex[] {
      const count = Math.max(6, Math.min(18, Math.round((w * h) / 60000)));
      return Array.from({ length: count }).map(() => ({
        x:        rand(0, w),
        y:        rand(0, h),
        size:     rand(18, 55),
        vx:       rand(-0.18, 0.18),
        vy:       rand(-0.14, 0.14),
        rotation: rand(0, Math.PI),
        rotSpeed: rand(-0.003, 0.003),
        alpha:    rand(0.06, 0.18),
      }));
    }

    function resize() {
      S.dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));
      S.w = Math.floor(window.innerWidth);
      S.h = Math.floor(window.innerHeight);
      if (!canvas) return;
      if (!ctx) return;
      canvas.style.width  = S.w + "px";
      canvas.style.height = S.h + "px";
      canvas.width  = Math.floor(S.w * S.dpr);
      canvas.height = Math.floor(S.h * S.dpr);
      ctx.setTransform(S.dpr, 0, 0, S.dpr, 0, 0);

      const count = Math.max(40, Math.min(90, Math.round((S.w * S.h) / 30000)));
      S.points = Array.from({ length: count }).map(() => ({
        x: rand(0, S.w), y: rand(0, S.h),
        vx: rand(-0.25, 0.25), vy: rand(-0.25, 0.25),
        r: rand(1, 1.8),
      }));

      S.hexes = spawnHexes(S.w, S.h);
    }

    function onMove(e: PointerEvent) {
      S.pointer.x = e.clientX;
      S.pointer.y = e.clientY;
      const mx = (e.clientX / window.innerWidth) * 100;
      const my = (e.clientY / window.innerHeight) * 100;
      document.documentElement.style.setProperty("--mx", `${mx}%`);
      document.documentElement.style.setProperty("--my", `${my}%`);
    }
    function onDown() { S.pointer.pulse = 1; }

    window.addEventListener("resize", resize, { passive: true });
    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerdown", onDown, { passive: true });
    resize();

    function drawHex(h: Hex) {
      const pts = hexPath(h.x, h.y, h.size, h.rotation);
      ctx.beginPath();
      ctx.moveTo(pts[0][0], pts[0][1]);
      for (let i = 1; i < 6; i++) ctx.lineTo(pts[i][0], pts[i][1]);
      ctx.closePath();
      ctx.strokeStyle = `rgba(0,230,120,${h.alpha})`;
      ctx.lineWidth = 0.8;
      ctx.stroke();

      // Inner hex
      const pts2 = hexPath(h.x, h.y, h.size * 0.55, h.rotation + Math.PI / 6);
      ctx.beginPath();
      ctx.moveTo(pts2[0][0], pts2[0][1]);
      for (let i = 1; i < 6; i++) ctx.lineTo(pts2[i][0], pts2[i][1]);
      ctx.closePath();
      ctx.strokeStyle = `rgba(0,180,255,${h.alpha * 0.5})`;
      ctx.lineWidth = 0.5;
      ctx.stroke();
    }

    function step() {
      const { w, h, points, hexes, pointer } = S;
      ctx.clearRect(0, 0, w, h);

      // ── Cursor haze ──
      if (pointer.x > 0) {
        const g = ctx.createRadialGradient(pointer.x, pointer.y, 10, pointer.x, pointer.y, 300);
        g.addColorStop(0, "rgba(0,230,120,0.08)");
        g.addColorStop(0.5, "rgba(0,180,255,0.04)");
        g.addColorStop(1, "rgba(0,0,0,0)");
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, w, h);
      }

      // ── Hexagons ──
      for (const hex of hexes) {
        hex.x += hex.vx;
        hex.y += hex.vy;
        hex.rotation += hex.rotSpeed;
        if (hex.x < -hex.size * 2)  hex.x = w + hex.size;
        if (hex.x > w + hex.size * 2) hex.x = -hex.size;
        if (hex.y < -hex.size * 2)  hex.y = h + hex.size;
        if (hex.y > h + hex.size * 2) hex.y = -hex.size;
        drawHex(hex);
      }

      // ── Radar sweep (top-right quadrant) ──
      const rcx = w * 0.85, rcy = h * 0.15, rr = Math.min(w, h) * 0.12;
      S.radar += 0.008;
      if (S.radar > Math.PI * 2) S.radar -= Math.PI * 2;

      // Radar rings
      for (let i = 1; i <= 3; i++) {
        ctx.beginPath();
        ctx.arc(rcx, rcy, rr * (i / 3), 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(0,230,120,${0.08 - i * 0.015})`;
        ctx.lineWidth = 0.8;
        ctx.stroke();
      }
      // Cross hairs
      ctx.beginPath();
      ctx.moveTo(rcx - rr, rcy); ctx.lineTo(rcx + rr, rcy);
      ctx.moveTo(rcx, rcy - rr); ctx.lineTo(rcx, rcy + rr);
      ctx.strokeStyle = "rgba(0,230,120,0.08)";
      ctx.lineWidth = 0.6;
      ctx.stroke();
      // Sweep gradient
      const sweepGrad = ctx.createConicalGradient
        ? null  // not widely available
        : null;
      void sweepGrad;
      // Manual sweep arc
      ctx.save();
      ctx.translate(rcx, rcy);
      for (let a = 0; a < Math.PI / 2; a += 0.04) {
        const angle = S.radar - a;
        const fade  = 1 - a / (Math.PI / 2);
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.arc(0, 0, rr, angle, angle + 0.04);
        ctx.closePath();
        ctx.fillStyle = `rgba(0,230,120,${fade * 0.14})`;
        ctx.fill();
      }
      // Sweep line
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(rr * Math.cos(S.radar), rr * Math.sin(S.radar));
      ctx.strokeStyle = "rgba(0,230,120,0.7)";
      ctx.lineWidth = 1.5;
      ctx.stroke();
      ctx.restore();

      // ── Particles ──
      for (const p of points) {
        p.x += p.vx; p.y += p.vy;
        if (p.x < -10) p.x = w + 10; else if (p.x > w + 10) p.x = -10;
        if (p.y < -10) p.y = h + 10; else if (p.y > h + 10) p.y = -10;

        // Cursor attraction
        const dx = pointer.x - p.x, dy = pointer.y - p.y;
        const dist = Math.hypot(dx, dy);
        if (dist < 180) {
          const f = (1 - dist / 180) * 0.01;
          p.vx += dx * f * 0.003; p.vy += dy * f * 0.003;
        }
        p.vx *= 0.999; p.vy *= 0.999;
      }

      // Connections
      for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
          const a = points[i], b = points[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < 110) {
            ctx.strokeStyle = `rgba(0,230,120,${(1 - d / 110) * 0.14})`;
            ctx.lineWidth = 0.7;
            ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
          }
        }
      }

      // Nodes
      for (const p of points) {
        ctx.fillStyle = "rgba(0,180,255,0.10)";
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r + 0.5, 0, Math.PI * 2); ctx.fill();
        ctx.fillStyle = "rgba(0,230,120,0.42)";
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2); ctx.fill();
      }

      // Click pulse
      if (pointer.pulse > 0.003) {
        pointer.pulse *= 0.91;
        const radius = (1 - pointer.pulse) * 400;
        ctx.strokeStyle = `rgba(0,230,120,${pointer.pulse * 0.22})`;
        ctx.lineWidth = 1.5;
        ctx.beginPath(); ctx.arc(pointer.x, pointer.y, radius, 0, Math.PI * 2); ctx.stroke();
      }

      rafRef.current = requestAnimationFrame(step);
    }

    rafRef.current = requestAnimationFrame(step);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", onDown);
    };
  }, []);

  return (
    <div aria-hidden className="fixed inset-0 -z-50">
      <div className="absolute inset-0 bg-[hsl(220_26%_5%)]" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(900px circle at 15% 10%, hsl(160 100% 45% / 0.055), transparent 50%), " +
            "radial-gradient(700px circle at 85% 20%, hsl(195 100% 55% / 0.04), transparent 50%)",
        }}
      />
      <div className="absolute inset-0 bg-grid opacity-55" />
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[hsl(220_26%_5%/0.55)]" />
      <div className="absolute inset-0 scanlines" />
      <div className="noise" />
    </div>
  );
}
