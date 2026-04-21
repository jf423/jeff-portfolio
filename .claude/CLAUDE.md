# Jeff's Portfolio — CLAUDE.md

## Project Overview

Personal portfolio website for Jeff Wang, a Senior Frontend Engineer actively job hunting. Hosted as a static site on GitHub Pages. Design references the example sites in `/example/`.

## Goals

- Showcase skills and experience to potential employers
- Demonstrate frontend architecture and design sensibility
- Fast, accessible, and fully responsive (RWD) across all devices

## Tech Stack

- **Framework**: Astro 4 (`output: 'static'`) — SSG, generates plain HTML at build time
- **UI Components**: React 18 + TypeScript (`@astrojs/react`) — interactive islands only
- **Styling**: CSS Modules (co-located with components) + global design tokens in `src/styles/globals.css`
- **Build**: Vite (Astro built-in), `base: '/jeff-portfolio/'`
- **Deployment**: GitHub Pages via GitHub Actions (`peaceiris/actions-gh-pages@v4`)
- **Package Manager**: npm

## Astro Islands Strategy

Only ship JS where interactivity is needed:

| Component | Directive | Reason |
|---|---|---|
| `Navbar.tsx` | `client:load` | Scroll spy + mobile hamburger menu |
| `ProjectCard.tsx` | `client:visible` | IntersectionObserver reveal animation |
| Everything else | Static Astro | Zero JS — pure HTML/CSS |

## Project Structure

```
jeff-portfolio/
  public/
    Resume.pdf
    favicon.svg
    avatar-placeholder.jpg     # replace with real photo
  src/
    components/
      Navbar/                  # React island (client:load)
      Footer/                  # Astro component
      SectionHeading/          # Double-layer heading (Astro)
      ProfileCard/             # Circular avatar + links (Astro)
      StatChip/                # +N stat display (Astro)
      ProjectCard/             # React island (client:visible)
      SkillBadge/              # Icon + label box (Astro)
      TimelineItem/            # Experience row (Astro)
      Badge/                   # Tech tag pill (Astro)
      icons/                   # Inline SVG React components
    hooks/
      useInView.ts             # IntersectionObserver, generic T extends HTMLElement
      useScrollSpy.ts          # Passive scroll → active section id
    layouts/
      Layout.astro             # <html>, <head>, Navbar, Footer
    pages/
      index.astro              # Assembles all sections
    sections/
      Hero.astro
      About.astro
      Skills.astro
      Experience.astro
      Projects.astro
      Contact.astro
    styles/
      globals.css              # CSS custom properties (design tokens) + reset
    types/
      index.ts                 # All domain types — SkillGroup, ExperienceItem, ProjectItem, etc.
    data/
      personal.ts              # Name, contact, bio, stats
      skills.ts                # Skill groups by category
      experience.ts            # Work history (4 roles)
      projects.ts              # Featured projects (4 items)
  astro.config.mjs
  tsconfig.json
  package.json
  .github/workflows/deploy.yml
```

## Design System

Defined as CSS custom properties in `src/styles/globals.css`. Never use raw color/spacing values in components — always reference tokens.

### Color Tokens
```
--color-bg:       #111111
--color-surface:  #1A1A1A
--color-border:   rgba(255, 255, 255, 0.08)
--color-accent:   #818CF8   /* indigo-400 */
--color-accent-h: #6366F1   /* indigo-500, hover */
--color-text-1:   #F0F0F0
--color-text-2:   #A0A0A0
```

### Typography
- Font: Inter (Google Fonts, weights 400/500/600/700/800)
- Headings: `clamp()` fluid sizing, `letter-spacing: -0.03em`, `font-weight: 800`
- Section headings use the **double-layer ghost effect** (large title + faint oversized copy behind)

### RWD Breakpoints (mobile-first)
```
Mobile:  default (0px+)              — single column, stacked
Tablet:  @media (min-width: 640px)  — 2-col grids
Desktop: @media (min-width: 1024px) — full layout
Wide:    @media (min-width: 1280px) — max-width cap
```

## Key Visual Patterns (from example sites)

### Double-Layer Section Heading
All section titles: large visible title + faint oversized ghost copy behind it.
- Ghost element: `aria-hidden="true"`, `opacity: 0.05`, hidden on mobile `(<640px)`
- Usage: `<SectionHeading line1="FEATURED" line2="PROJECTS" />`

### Project Card Gradient
Each card has a gradient visual area. Inject via inline CSS custom properties:
```tsx
style={{ '--grad-from': project.gradientFrom, '--grad-to': project.gradientTo } as React.CSSProperties}
```

### Scroll Navigation
Navbar uses `document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })` via `<button>` elements — not `href="#id"` anchors.

## Conventions

- TypeScript strict mode — no `any`, explicit return types on all functions
- Functional components only, no class components
- **Named exports only** — no default exports for React `.tsx` components
- Co-locate CSS Module with the component file
- All content in `src/data/` as `readonly` typed constants — never hardcoded in components
- Astro `.astro` components for static sections; React `.tsx` only for islands requiring JS
- All external links: `target="_blank" rel="noopener noreferrer"`
- `prefers-reduced-motion`: collapse all transitions to `0.01ms` in `globals.css`

## Content Sections

1. **Hero** — profile card (circular avatar + name + social links), "FRONTEND ENGINEER" heading with ghost, stats row (`+8 Years`, `+4 Companies`, `+50% Perf`), CTA buttons (View Resume, Contact Me)
2. **About** — bio paragraphs + "what I'm looking for" card, 2-col desktop
3. **Skills** — icon+label grid, `auto-fill minmax(120px, 1fr)`, top skills with SVG logos
4. **Experience** — vertical timeline, 4 roles (Sherpany → Trend Micro → Positive Grid → YiChi)
5. **Projects** — 4 cards with gradient visual area, description, impact line, tech tags
6. **Contact** — "LET'S WORK TOGETHER" heading, email link, GitHub + LinkedIn

## Key Skills to Highlight

**Core**: React, TypeScript, JavaScript (ES2020+), Frontend Architecture, Design Systems, Performance Optimization

**Frontend**: Redux, React Query, Next.js, HTML5, CSS3, Responsive Design, CSS Modules, Storybook, D3.js

**Backend**: Node.js, Python, MongoDB, Redis, Serverless Framework

**Testing**: Jest, Playwright, Pact, Robot Framework

**Cloud/DevOps**: AWS (EC2, ECS, S3, Lambda, CloudWatch), Docker, CI/CD, GitHub Actions, Linux

## GitHub Pages Deployment

- `astro.config.mjs`: `output: 'static'`, `base: '/jeff-portfolio/'`
- All `public/` asset URLs prefixed with `import.meta.env.BASE_URL`
- GitHub Actions: `npm ci → npm run build → peaceiris/actions-gh-pages@v4 → ./dist`
- Astro generates real `.html` files — direct URL visits work natively, no HashRouter needed

## What NOT to Do

- Do not add backend services or APIs (static site only)
- Do not use Next.js, Vite standalone, or any framework other than Astro
- Do not use React for static sections — use `.astro` components (zero JS)
- Do not add unnecessary npm dependencies — keep the bundle lean
- Do not hardcode content in components — all data goes in `src/data/`
- Do not use default exports for React (`.tsx`) components
- Do not use raw color/spacing values in CSS — always use design token custom properties
- Do not use `HashRouter` — Astro generates real `.html` files
