export type ProjectCategory = 'bts1' | 'bts2' | 'stage' | 'personal' | 'prior'

export type ProjectOrigin = 'BTS' | 'Stage' | 'Personnel' | 'Antérieur au BTS'

export type E5CompetencyId = 'B1.1' | 'B1.2' | 'B1.3' | 'B1.4' | 'B1.5' | 'B1.6'

export interface ProjectLink {
  label: string
  url: string
  kind: 'repository' | 'demo' | 'website' | 'document'
}

export interface ProjectMedia {
  src: string
  alt: string
  width: number
  height: number
}

export interface ProjectDetails {
  context?: string
  objective?: string
  need?: string
  work?: string[]
  contribution?: string[]
  methods?: string[]
  constraints?: string[]
  result?: string
  lessons?: string[]
}

export interface Project {
  id: string
  title: string
  type: string
  category: ProjectCategory
  origin: ProjectOrigin
  period: string
  summary: string
  technologies: string[]
  links: ProjectLink[]
  repositoryName?: string
  isLearningExercise?: boolean
  e5Candidate: boolean
  competencyIds: E5CompetencyId[]
  details?: ProjectDetails
  media?: ProjectMedia[]
  documentIds?: string[]
}

export interface Experience {
  id: string
  organization: string
  title: string
  location?: string
  period: string
  duration?: string
  context?: string
  summary: string
  activities: string[]
  technologies: string[]
  confidentialityNote?: string
}

export interface Education {
  id: string
  title: string
  institution?: string
  period: string
  description?: string
  relatedProjectId?: string
}

export type SkillUsage = 'Utilisée régulièrement' | 'Utilisée dans un projet' | 'Découverte ou pratiquée'

export interface Skill {
  name: string
  category: string
  usage?: SkillUsage
}

export interface E5Competency {
  id: E5CompetencyId
  title: string
  description: string
  criteria: string[]
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

export interface DocumentLink {
  id: string
  title: string
  type: 'CV' | 'Tableau E5' | 'Attestation de stage' | 'Justificatif'
  path: string
  description?: string
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
