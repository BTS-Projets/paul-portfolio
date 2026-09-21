import type { Skill } from '../types/models'

export const skills: Skill[] = [
  ...['Java', 'JavaScript', 'TypeScript', 'Python', 'PHP', 'HTML', 'CSS', 'Vue', 'React', 'Svelte'].map(
    (name) => ({
      name,
      category: 'Développement',
    }),
  ),
  ...['SQL', 'MySQL', 'MariaDB', 'SQLite', 'SQLAlchemy'].map((name) => ({
    name,
    category: 'Données',
  })),
  ...['Git', 'GitHub', 'GitLab', 'GitHub Actions'].map((name) => ({
    name,
    category: 'Versioning et automatisation',
  })),
  ...[
    'Maven',
    'Gradle',
    'PaperMC',
    'Velocity',
    'Arduino',
    'Cloudflare',
    'IntelliJ IDEA',
    'WebStorm',
    'Visual Studio Code',
  ].map((name) => ({ name, category: 'Écosystèmes et outils' })),
]
