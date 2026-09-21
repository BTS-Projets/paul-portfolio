export interface Experience {
  id: string
  organization: string
  title: string
  location?: string
  period: string
  duration?: string
  context?: string
  summary: string
  focusAreas: string[]
  technologies: string[]
  detailPath?: `/experiences/${string}`
  confidentialityNote?: string
}

export interface Education {
  id: string
  title: string
  institution?: string
  period: string
  description?: string
}

export type SkillUsage = 'Utilisée régulièrement' | 'Utilisée dans un projet' | 'Découverte ou pratiquée'

export interface Skill {
  name: string
  category: string
  usage?: SkillUsage
}

export interface WatchEntry {
  id: string
  date: string
  title: string
  sourceName: string
  sourceUrl: string
  category: string
  summary: string
  impact?: string
  tags: string[]
}

export interface WatchConfig {
  topic?: string
  rationale?: string
  question?: string
  method?: string
  toolsAndSources: string[]
  keywords: string[]
  synthesis?: string
}

export interface SocialLink {
  label: string
  url: string
}

export interface Profile {
  name: string
  currentEducation: string
  option: string
  period: string
  introduction: string
  about: string[]
  email?: string
  website: string
  socialLinks: SocialLink[]
  professionalGoal?: string
}
