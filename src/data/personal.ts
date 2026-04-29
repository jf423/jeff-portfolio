import type { PersonalData } from '../types';

export const personal: PersonalData = {
  name: 'Jeff Wang',
  initials: 'JW',
  title: 'Senior Software Engineer',
  location: 'Vancouver, BC, Canada',
  tagline:
    '8+ years building scalable SaaS platforms — specialising in frontend architecture, design systems, and performance, with experience across APIs, backend services, and cloud systems.',
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
    "I'm a Senior Software Engineer with 8+ years of experience building scalable SaaS platforms. I specialise in frontend architecture and performance, with hands-on experience across APIs, backend services, and cloud systems — delivering end-to-end solutions in global teams.",
    'My work spans design systems in TypeScript monorepos, enterprise PDF workflow UIs, cloud security consoles, and real-time audio-visualisation interfaces. I care deeply about engineering rigour, testability, and shipping with confidence.',
  ],
  lookingFor:
    'Open to senior and staff-level roles — onsite, hybrid, or remote. Eligible to work in Canada. I thrive in teams that value architecture discussions, meaningful code review, and a strong culture of craft.',
};
