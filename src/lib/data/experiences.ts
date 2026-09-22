import type { Experience } from '../types/models'

export const experiences: Experience[] = [
  {
    id: 'stage-bp2i-2026',
    organization: 'BP2I',
    title: 'Stage de première année',
    location: 'Montreuil',
    period: 'Juin - juillet 2026',
    duration: '6 semaines',
    context: 'BP2I, entité du groupe BNP Paribas.',
    summary:
      'Découverte d’une organisation informatique professionnelle et contribution encadrée à une application web existante.',
    focusAreas: [
      'Développement Python 3 et découverte de Svelte.',
      'Git, GitLab et correction d’interface sur une branche dédiée.',
      'Méthodes Agile, support informatique et pratiques ITIL.',
      'Découverte de la supervision et de l’infrastructure.',
    ],
    technologies: [
      'Python 3',
      'SQLAlchemy',
      'Svelte',
      'Git',
      'GitLab',
      'Grafana',
      'Prometheus',
      'Kubernetes',
    ],
    confidentialityNote:
      'Cette présentation reste volontairement générale : aucun projet, code, ticket, outil interne ou détail d’infrastructure confidentiel n’est publié.',
  },
]
