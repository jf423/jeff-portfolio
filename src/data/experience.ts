import type { ExperienceItem } from '../types';

export const experiences: readonly ExperienceItem[] = [
  {
    id: 'sherpany',
    company: 'Sherpany',
    role: 'Senior Frontend Engineer',
    period: 'May 2021 – Jan 2026',
    location: 'Remote / Europe',
    highlights: [
      'Architected reusable design-system components in TypeScript within a Turborepo monorepo, adopted by 5+ product squads across the organisation.',
      'Led migration of ~80% of Redux-Saga async flows to React Query, reducing boilerplate by ~40% and significantly improving cache reliability.',
      'Implemented enterprise PDF document workflows using PSPDFKit, enabling secure in-platform document viewing, annotation, and signing.',
      'Established CI/CD pipelines with automated type-checking, linting, and visual-regression gates across all frontend packages.',
    ],
    tags: ['React', 'TypeScript', 'React Query', 'Turborepo', 'PSPDFKit', 'Design Systems', 'CI/CD'],
  },
  {
    id: 'trendmicro',
    company: 'Trend Micro',
    role: 'Senior Frontend Developer',
    period: 'Jan 2019 – Jan 2021',
    location: 'Taipei, Taiwan',
    highlights: [
      'Led frontend architecture for the CloudOne Network Security console using React and TypeScript, enabling the product\'s transition to a scalable enterprise SaaS platform.',
      'Grew test coverage from 45% → 90% by introducing Jest, Pact contract tests, and Robot Framework E2E strategies, enabling confident high-velocity releases.',
      'Improved large-dataset rendering performance by 50% through component memoisation, virtualised list rendering, and targeted bundle analysis.',
      'Founded and ran a Frontend Guild connecting Taipei and Austin engineering teams, sharing best practices via Storybook-driven component documentation.',
    ],
    tags: ['React', 'TypeScript', 'Jest', 'Storybook', 'Webpack', 'Performance', 'Pact'],
  },
  {
    id: 'positivegrid',
    company: 'Positive Grid',
    role: 'Frontend Engineer',
    period: 'Apr 2018 – Dec 2018',
    location: 'Remote',
    highlights: [
      'Migrated the flagship amp-modelling web app from AngularJS to React using Webpack and Docker, improving page load speed by 30% and reducing codebase size by ~50%.',
      'Built real-time audio-visualisation components using D3.js and SVG in a Next.js app, rendering live waveform data at 60 fps with requestAnimationFrame.',
    ],
    tags: ['React', 'Next.js', 'D3.js', 'AngularJS', 'Webpack', 'Docker', 'Performance'],
  },
  {
    id: 'yichi',
    company: 'YiChi Information',
    role: 'Frontend Engineer',
    period: 'Mar 2017 – Mar 2018',
    location: 'Taipei, Taiwan',
    highlights: [
      'Developed the Zines rich-text editor with React and Next.js, delivering a stable drag-and-drop publishing interface adopted by the full product team.',
      'Implemented react-intl internationalisation supporting Traditional Chinese, Simplified Chinese, and English, broadening the platform\'s reach.',
      'Improved page load performance 10× by introducing Redis caching on the API layer for frequently accessed data.',
      'Built CI/CD pipelines with CircleCI, Docker, and AWS, eliminating manual release steps and reducing deployment time by 50%.',
    ],
    tags: ['React', 'Next.js', 'Node.js', 'Redis', 'AWS', 'Docker', 'CircleCI', 'i18n'],
  },
];
