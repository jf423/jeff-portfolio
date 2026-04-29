import type { ExperienceItem } from '../types';

export const experiences: readonly ExperienceItem[] = [
  {
    id: 'sherpany',
    company: 'Sherpany',
    role: 'Senior Software Engineer',
    period: 'May 2021 – Jan 2026',
    location: 'Remote (Europe)',
    highlights: [
      'Developed reusable design system components adopted across multiple product teams, improving UI consistency and accelerating feature development.',
      'Led migration of ~80% of the data layer from Redux-Saga to React Query, redesigning client-server data flow and caching strategy.',
      'Integrated repositories into a monorepo architecture to improve collaboration across engineering teams.',
      'Implemented enterprise PDF document workflows using PSPDFKit, enabling secure document viewing and annotation inside the platform.',
    ],
    tags: ['React', 'TypeScript', 'React Query', 'Redux', 'Ant Design', 'Monorepo', 'PSPDFKit', 'Node.js'],
  },
  {
    id: 'trendmicro',
    company: 'Trend Micro',
    role: 'Senior Software Engineer',
    period: 'Jan 2019 – Jan 2021',
    location: 'Taipei, Taiwan',
    highlights: [
      'Led frontend architecture for the CloudOne Network Security console, enabling the product\'s transition to a scalable SaaS platform used by enterprise customers.',
      'Increased frontend test coverage from 45% to 90% by introducing Jest, Pact, and Robot Framework testing strategies, significantly improving release stability.',
      'Improved large-dataset rendering performance by 50% using virtualisation techniques.',
      'Founded and organised a frontend guild connecting Taipei and Austin engineering teams to share best practices and improve cross-team collaboration.',
      'Introduced Storybook UI documentation to standardise component development and improve maintainability.',
    ],
    tags: ['React', 'TypeScript', 'Redux-Observable', 'Styled-Components', 'Jest', 'Pact', 'Robot Framework', 'Storybook'],
  },
  {
    id: 'positivegrid',
    company: 'Positive Grid',
    role: 'Frontend Engineer',
    period: 'Apr 2018 – Dec 2018',
    location: 'Remote, Taiwan',
    highlights: [
      'Migrated the frontend framework from AngularJS to React.',
      'Refactored the codebase to reduce ~50% LOC and improve build performance.',
      'Built real-time audio visualisation components using D3.js and SVG.',
    ],
    tags: ['React', 'Redux', 'D3.js', 'Stylus', 'Styled-Components', 'AngularJS'],
  },
  {
    id: 'yichi',
    company: 'YiChi Information',
    role: 'Frontend Engineer',
    period: 'Mar 2017 – Mar 2018',
    location: 'Taipei, Taiwan',
    highlights: [
      'Developed the Zines editor using React and Next.js.',
      'Implemented internationalisation with react-intl and OneSky.',
      'Improved page load performance by 10× by implementing Redis caching for frequently accessed data.',
      'Built CI/CD pipelines using CircleCI, Docker, and AWS.',
    ],
    tags: ['React', 'Redux', 'Next.js', 'Redis', 'AWS', 'Docker', 'CircleCI', 'i18n'],
  },
];
