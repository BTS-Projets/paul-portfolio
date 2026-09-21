import type { E5Competency } from '../types'

export const competencies: E5Competency[] = [
  {
    id: 'B1.1',
    title: 'Gérer le patrimoine informatique',
    description: 'Identifier, encadrer et maintenir les ressources numériques de l’organisation.',
    criteria: [
      'Recenser et identifier les ressources numériques',
      'Exploiter des référentiels, normes et standards',
      'Mettre en place et vérifier les niveaux d’habilitation',
      'Vérifier les conditions de continuité d’un service',
      'Gérer des sauvegardes',
      'Vérifier le respect des règles d’utilisation des ressources numériques',
    ],
  },
  {
    id: 'B1.2',
    title: 'Répondre aux incidents et aux demandes d’assistance et d’évolution',
    description: 'Suivre et traiter les demandes liées aux services et aux applications.',
    criteria: [
      'Collecter, suivre et orienter les demandes',
      'Traiter des demandes concernant les services réseau et système ou applicatifs',
      'Traiter des demandes concernant les applications',
    ],
  },
  {
    id: 'B1.3',
    title: 'Développer la présence en ligne de l’organisation',
    description: 'Faire évoluer des services en ligne dans leur contexte organisationnel.',
    criteria: [
      'Participer à la valorisation de l’image d’une organisation sur les médias numériques',
      'Prendre en compte le cadre juridique et les enjeux économiques',
      'Référencer les services en ligne et mesurer leur visibilité',
      'Participer à l’évolution d’un site Web exploitant des données de l’organisation',
    ],
  },
  {
    id: 'B1.4',
    title: 'Travailler en mode projet',
    description: 'Organiser, suivre et analyser la réalisation d’un projet.',
    criteria: [
      'Analyser les objectifs et les modalités d’organisation d’un projet',
      'Planifier les activités',
      'Évaluer les indicateurs de suivi et analyser les écarts',
    ],
  },
  {
    id: 'B1.5',
    title: 'Mettre à disposition des utilisateurs un service informatique',
    description: 'Tester, déployer et accompagner la mise en service.',
    criteria: [
      'Réaliser les tests d’intégration et d’acceptation d’un service',
      'Déployer un service',
      'Accompagner les utilisateurs dans la mise en place d’un service',
    ],
  },
  {
    id: 'B1.6',
    title: 'Organiser son développement professionnel',
    description: 'Construire sa veille, son environnement d’apprentissage et son projet professionnel.',
    criteria: [
      'Mettre en place son environnement d’apprentissage personnel',
      'Mettre en œuvre des outils et stratégies de veille informationnelle',
      'Gérer son identité professionnelle',
      'Développer son projet professionnel',
    ],
  },
]
