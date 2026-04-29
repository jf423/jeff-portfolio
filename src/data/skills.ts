import type { SkillGroup } from '../types';

export const skillGroups: readonly SkillGroup[] = [
  {
    category: 'Core',
    skills: ['React', 'TypeScript', 'JavaScript (ES6+)', 'Frontend Architecture', 'Design Systems', 'Performance Optimization', 'AWS'],
  },
  {
    category: 'Frontend',
    skills: [
      'Next.js',
      'Redux',
      'React Query',
      'React Hooks',
      'HTML5',
      'CSS3',
      'Responsive Design',
      'CSS-in-JS',
      'Storybook',
      'D3.js',
    ],
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'Python', 'MongoDB', 'Redis'],
  },
  {
    category: 'Testing',
    skills: ['Jest', 'Playwright', 'Pact (Contract)', 'Robot Framework'],
  },
  {
    category: 'Cloud & DevOps',
    skills: [
      'AWS (EC2, ECS, S3, Lambda, CloudWatch)',
      'Docker',
      'CI/CD',
      'Serverless Framework',
      'GitHub Actions',
      'CircleCI',
      'Linux',
    ],
  },
  {
    category: 'AI',
    skills: ['Claude Code', 'Cursor', 'Open Claw'],
  },
  {
    category: 'Tools',
    skills: ['Webpack', 'Babel', 'Git', 'MacOS'],
  },
];
