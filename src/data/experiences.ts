import type { Experience } from '../types'

export const experiences: Experience[] = [
  {
    id: 'stage-bp2i-2026',
    organization: 'BP2I',
    title: 'Stage de première année',
    location: 'Montreuil',
    period: 'Juin — juillet 2026',
    duration: '6 semaines',
    context: 'BP2I, entité du groupe BNP Paribas.',
    summary:
      'Découverte d’une organisation informatique professionnelle et contribution encadrée à une application web existante.',
    activities: [
      'Participation à des réunions d’équipe et découverte du fonctionnement en méthode Agile.',
      'Mise en place d’un environnement de développement local.',
      'Développement et entraînement en Python 3 avec SQLAlchemy, Poetry et Alembic.',
      'Découverte de Svelte et intervention sur une application web existante.',
      'Correction d’un problème d’interface en CSS et Tailwind sur une branche Git dédiée.',
      'Push de la branche et résolution d’un problème de merge.',
      'Découverte du support informatique et de pratiques liées à ITIL.',
      'Découverte d’outils de supervision et d’infrastructure : Grafana, Prometheus, Sysdig et Kubernetes.',
    ],
    technologies: [
      'Python 3',
      'SQLAlchemy',
      'Poetry',
      'Alembic',
      'Svelte',
      'CSS',
      'Tailwind',
      'Git',
      'GitLab',
      'Grafana',
      'Prometheus',
      'Sysdig',
      'Kubernetes',
    ],
    confidentialityNote:
      'Cette présentation reste volontairement générale : aucun projet, code, ticket, outil interne ou détail d’infrastructure confidentiel n’est publié.',
  },
]
