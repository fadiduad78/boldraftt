# Bold Draft — Agency Website

A premium, highly animated marketing-agency site built with **Next.js (App Router)**, **GSAP + ScrollTrigger**, **Lenis** smooth scroll, and **Framer Motion**. Dark-luxury aesthetic, custom magnetic cursor, animated mesh-gradient background, horizontal-scroll portfolio, animated counters, and more.

## Quick start

```bash
npm install
npm run dev
```

Open http://localhost:3000

```bash
npm run build && npm start   # production build
```

## Deploy to Vercel

1. Push this folder to a GitHub repo.
2. Go to vercel.com → **New Project** → import the repo.
3. Framework preset: **Next.js** (auto-detected). No env vars needed for the base site.
4. Deploy. Done.

(Or: `npm i -g vercel` then run `vercel` in this folder.)

## Project structure

```
app/
  layout.js        # fonts, metadata, html shell
  page.js          # composes all sections
  globals.css      # full design system + animations
components/
  Background.jsx   # animated mesh gradient, aurora, noise
  SmoothScroll.jsx # Lenis + GSAP ticker + anchor scrolling
  Cursor.jsx       # custom magnetic cursor with section labels
  Loader.jsx       # intro progress loader
  Nav.jsx          # fixed-height navbar (no shift on scroll) + mobile menu
  Hero.jsx         # staggered text reveal + mouse depth
  Marquee.jsx
  About.jsx
  Services.jsx     # 3D-tilt cards + detail modal
  Portfolio.jsx    # GSAP horizontal scroll (touch-swipe on mobile)
  Results.jsx      # animated counters
  Process.jsx      # scroll-filled gradient timeline
  Testimonials.jsx # infinite marquee carousel
  Team.jsx
  Contact.jsx      # glass form + confetti celebration
  Footer.jsx
  Reveal.jsx       # Framer Motion in-view fade-up helper
  Magnetic.jsx     # magnetic hover helper
  WebGLBlob.jsx    # OPTIONAL three.js hero accent (off by default)
lib/
  data.js          # all editable content (services, work, team, etc.)
```

## Editing content

All copy lives in `lib/data.js` — services, case studies, testimonials, team, stats, process. Edit there and the UI updates.

## Adding real media (photos / videos / reels)

The portfolio and team currently use gradient placeholders.

- **Portfolio** (`components/Portfolio.jsx`): replace the `<div className="ph" .../>` with:
  ```jsx
  <video className="ph" src="/work/glow-theory.mp4" muted loop playsInline
         onMouseEnter={(e)=>e.currentTarget.play()} onMouseLeave={(e)=>e.currentTarget.pause()} />
  ```
  or an `<img src="/work/glow-theory.jpg" className="ph" alt="" />`. Put files in `public/work/`.
- **Team** (`components/Team.jsx`): swap the `.face` div for `<img className="face" src="/team/alex.jpg" alt="" />`.

## Wiring up the contact form

In `components/Contact.jsx`, the `submit()` function has a `// TODO` marker. Add a Next.js Route Handler (e.g. `app/api/contact/route.js`) that sends an email (Resend, Postmark) or writes to your CMS, then `fetch('/api/contact', { method:'POST', body: JSON.stringify(...) })` from `submit()`.

## Adding a CMS

Content is centralized in `lib/data.js`, so swapping in a CMS is straightforward: fetch from Sanity / Contentful / Payload in a Server Component (or `page.js`) and pass the data down as props instead of importing the static arrays.

## WebGL hero (optional)

`components/WebGLBlob.jsx` is a ready react-three-fiber accent that is **not mounted by default** (keeps first load fast). To enable, edit `components/Background.jsx`:

```jsx
import WebGLBlob from "./WebGLBlob";
// ...inside the returned fragment:
<WebGLBlob />
```

## Notes

- Respects `prefers-reduced-motion` — heavy animation is disabled for those users.
- The custom cursor is hidden on touch devices; native scroll/tap take over.
- Smooth scroll, the cursor, and horizontal scroll all clean themselves up on unmount.
