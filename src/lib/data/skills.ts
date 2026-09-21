import type { Skill } from '../types'

export const skills: Skill[] = [
  ...['Java', 'JavaScript', 'TypeScript', 'Python', 'PHP', 'HTML', 'CSS'].map((name) => ({
    name,
    category: 'Langages et Web',
  })),
  ...['Vue', 'React', 'Svelte'].map((name) => ({ name, category: 'Frameworks Web' })),
  ...['SQL', 'MySQL', 'MariaDB', 'SQLite', 'SQLAlchemy'].map((name) => ({
    name,
    category: 'Données',
  })),
  ...['Git', 'GitHub', 'GitLab', 'GitHub Actions'].map((name) => ({
    name,
    category: 'Versioning et CI',
  })),
  ...['Maven', 'Gradle', 'PaperMC', 'Velocity'].map((name) => ({
    name,
    category: 'Java et Minecraft',
  })),
  ...['Arduino', 'Cloudflare', 'IntelliJ IDEA', 'WebStorm', 'Visual Studio Code'].map((name) => ({
    name,
    category: 'Outils et plateformes',
  })),
]
