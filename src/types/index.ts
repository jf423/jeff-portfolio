export type SkillCategory =
  | 'Core'
  | 'Frontend'
  | 'Backend'
  | 'Testing'
  | 'Cloud & DevOps'
  | 'Tools';

export interface SkillGroup {
  readonly category: SkillCategory;
  readonly skills: readonly string[];
}

export interface ExperienceItem {
  readonly id: string;
  readonly company: string;
  readonly role: string;
  readonly period: string;
  readonly location: string;
  readonly highlights: readonly string[];
  readonly tags: readonly string[];
}

export interface ProjectLink {
  readonly label: string;
  readonly href: string;
}

export interface ProjectItem {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly impact: string;
  readonly tags: readonly string[];
  readonly links: readonly ProjectLink[];
  readonly gradientFrom: string;
  readonly gradientTo: string;
  readonly imageUrl?: string;
}

export interface StatItem {
  readonly value: string;
  readonly label: string;
}

export interface PersonalData {
  readonly name: string;
  readonly initials: string;
  readonly title: string;
  readonly location: string;
  readonly tagline: string;
  readonly email: string;
  readonly github: string;
  readonly linkedin: string;
  readonly resumeUrl: string;
  readonly avatarUrl: string;
  readonly stats: readonly StatItem[];
  readonly aboutParagraphs: readonly string[];
  readonly lookingFor: string;
}
