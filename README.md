# Abdul Rafay — Cyberpunk Portfolio (Next.js + Tailwind + Motion)

A fast, recruiter-friendly cyberpunk portfolio with:
- Animated interactive canvas background (mouse-reactive + click pulse)
- Optional video background (drop `public/cyberpunk-bg.webm` or `.mp4`)
- Glitch / scanlines / neon UI
- Secure-by-design headers (no trackers)
- Vercel-ready

## Run locally
```bash
npm install
npm run dev
```

## Customize content
Edit: `src/content/site.ts`

## Add assets
- Profile photo: `public/avatar.jpg` (optional)
- Resume: `public/Abdul-Rafay-Resume.pdf` (optional)
  - Then set `site.links.resume` in `src/content/site.ts` to that path.
- Background video: `public/cyberpunk-bg.webm` (optional)
- Project screenshots: `public/projects/*.png` (optional)

## Deploy (Vercel)
1. Push to GitHub
2. Import in Vercel
3. Done ✅
