import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-syne)", "ui-sans-serif", "system-ui"],
        display: ["var(--font-syne)", "ui-sans-serif", "system-ui"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular"],
      },
      colors: {
        bg:      "hsl(var(--bg))",
        fg:      "hsl(var(--fg))",
        muted:   "hsl(var(--muted))",
        card:    "hsl(var(--card))",
        border:  "hsl(var(--border))",
        ring:    "hsl(var(--ring))",
        accent:  "hsl(var(--accent))",
        accent2: "hsl(var(--accent2))",
        danger:  "hsl(var(--danger))",
        gold:    "hsl(var(--gold))",
      },
      boxShadow: {
        soft:  "0 8px 24px rgba(0,0,0,0.3)",
        glow:  "0 0 20px hsl(var(--accent)/0.25)",
        glow2: "0 0 20px hsl(var(--accent2)/0.25)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-5px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" },
        },
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        float:   "float 6s ease-in-out infinite",
        shimmer: "shimmer 6s linear infinite",
        fadeIn:  "fadeIn 0.5s ease forwards",
      },
    },
  },
  plugins: [],
} satisfies Config;
