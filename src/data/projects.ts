import type { ProjectItem } from '../types';

export const projects: readonly ProjectItem[] = [
  {
    id: 'design-system',
    title: 'Sherpany Design System',
    description:
      'A TypeScript-first component library built inside a Turborepo monorepo. Covers form controls, data display, overlays, and PDF annotation surfaces — with full Storybook documentation and visual-regression testing.',
    impact: 'Adopted by 5+ product squads; reduced cross-team UI inconsistency by ~60% and accelerated new screen development 3×.',
    tags: ['TypeScript', 'React', 'Turborepo', 'Storybook', 'CSS Modules', 'Accessibility'],
    links: [],
    gradientFrom: '#3730a3',
    gradientTo: '#818cf8',
  },
  {
    id: 'cloudone-console',
    title: 'CloudOne Network Security Console',
    description:
      'Greenfield enterprise security dashboard built with React and TypeScript, visualising real-time network threat data for enterprise customers. Implemented virtualised list rendering and aggressive memoisation to handle high-frequency data updates.',
    impact: '50% rendering performance improvement; test coverage scaled from 45% → 90%, enabling confident high-velocity releases.',
    tags: ['React', 'TypeScript', 'Jest', 'Webpack', 'Performance Optimisation', 'Security'],
    links: [],
    gradientFrom: '#92400e',
    gradientTo: '#f59e0b',
  },
  {
    id: 'rq-migration',
    title: 'Redux-Saga → React Query Migration',
    description:
      'Planned and executed the incremental migration of ~80% of async state management flows from Redux-Saga to React Query across a large production codebase — zero regressions, shipped over multiple quarters.',
    impact: '~40% boilerplate reduction; significantly improved cache coherence, loading-state UX, and onboarding speed for new engineers.',
    tags: ['React Query', 'Redux-Saga', 'TypeScript', 'Architecture', 'Refactoring'],
    links: [],
    gradientFrom: '#064e3b',
    gradientTo: '#10b981',
  },
  {
    id: 'audio-visualizer',
    title: 'Real-Time Audio Visualiser',
    description:
      "D3.js-powered waveform and spectrum visualisation for Positive Grid's amp-modelling web app. Rendered live audio buffer data at 60 fps using requestAnimationFrame and canvas-backed D3 selections inside a Next.js application.",
    impact: '60 fps visualisation on mid-range devices; part of the AngularJS → React migration that improved page load by 30%.',
    tags: ['D3.js', 'React', 'Next.js', 'Canvas', 'Web Audio API', 'Performance'],
    links: [],
    gradientFrom: '#831843',
    gradientTo: '#ec4899',
  },
];
