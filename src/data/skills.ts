import type { SkillGroup } from '../types';

export const skillGroups: readonly SkillGroup[] = [
  {
    category: 'Core',
    skills: ['React 18', 'TypeScript', 'JavaScript (ES2020+)', 'HTML5', 'CSS3'],
  },
  {
    category: 'Frontend',
    skills: [
      'Next.js',
      'Redux / Redux-Saga',
      'React Query',
      'CSS Modules',
      'Styled Components',
      'Storybook',
      'D3.js',
      'Responsive Design',
      'Design Systems',
    ],
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'Python', 'MongoDB', 'Redis', 'Serverless Framework'],
  },
  {
    category: 'Testing',
    skills: ['Jest', 'Playwright', 'React Testing Library', 'Pact (Contract)', 'Robot Framework'],
  },
  {
    category: 'Cloud & DevOps',
    skills: [
      'AWS (EC2, ECS, S3, Lambda)',
      'Docker',
      'GitHub Actions',
      'CircleCI',
      'CI/CD Pipelines',
      'Linux',
    ],
  },
  {
    category: 'Tools',
    skills: ['Vite', 'Webpack', 'Babel', 'Figma', 'PSPDFKit', 'Git'],
  },
];
