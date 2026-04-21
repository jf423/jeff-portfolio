import type { PersonalData } from '../types';

export const personal: PersonalData = {
  name: 'Jeff Wang',
  initials: 'JW',
  title: 'Senior Frontend Engineer',
  location: 'Vancouver, BC, Canada',
  tagline:
    'Building large-scale SaaS platforms with React & TypeScript — from pixel-perfect design systems to measurable performance wins.',
  email: 'jf0423@gmail.com',
  github: 'https://github.com/jf423',
  linkedin: 'https://linkedin.com/in/jeffwangtw',
  resumeUrl: '/jeff-portfolio/Resume.pdf',
  avatarUrl: '/jeff-portfolio/avatar.jpg',
  stats: [
    { value: '+8', label: 'Years Exp.' },
    { value: '+4', label: 'Companies' },
    { value: '+50%', label: 'Perf Gains' },
  ],
  aboutParagraphs: [
    "I'm a Senior Frontend Engineer with 8+ years building production-grade SaaS platforms across Europe and Asia. My work spans design systems in TypeScript monorepos, complex PDF workflow UIs, cloud security consoles, and real-time audio-visualization interfaces.",
    'I care deeply about the intersection of engineering rigour and user experience — writing components that are accessible, testable, and a pleasure to maintain. I love pushing performance boundaries and mentoring teams through architectural shifts.',
  ],
  lookingFor:
    'Open to senior and staff-level frontend roles — remote-friendly or based in Vancouver, BC. I thrive in teams that value architecture discussions, meaningful code review, and shipping with confidence.',
};
