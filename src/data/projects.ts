import type { Project } from '../types'

const btsProject = (
  project: Omit<Project, 'category' | 'origin' | 'period' | 'e5Candidate' | 'competencyIds'>,
): Project => ({
  ...project,
  category: 'bts1',
  origin: 'BTS',
  period: 'BTS 1 — 2025-2026',
  e5Candidate: true,
  competencyIds: [],
})

export const projects: Project[] = [
  btsProject({
    id: 'cpascher',
    title: 'CPasCher',
    repositoryName: 'E-Commerce-CPascher',
    type: 'Projet e-commerce',
    summary:
      'Plateforme e-commerce avec catalogue, panier local, espace client, traitements PHP et modélisation d’une base de données relationnelle.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
    links: [
      { label: 'Code source', url: 'https://github.com/BTS-Projets/E-Commerce-CPascher', kind: 'repository' },
      { label: 'Voir la démo', url: 'https://bts.paulmuller.dev/E-Commerce-CPascher/website/', kind: 'demo' },
    ],
  }),
  btsProject({
    id: 'gestionnaire-taches',
    title: 'Gestionnaire de tâches',
    repositoryName: 'App-Gestion_Taches',
    type: 'Application web',
    summary:
      'Gestionnaire permettant d’ajouter, terminer et supprimer des tâches, avec sauvegarde locale et suivi des statistiques.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'LocalStorage'],
    links: [
      { label: 'Code source', url: 'https://github.com/BTS-Projets/App-Gestion_Taches', kind: 'repository' },
      { label: 'Voir la démo', url: 'https://bts.paulmuller.dev/App-Gestion_Taches/', kind: 'demo' },
    ],
  }),
  btsProject({
    id: 'mini-jeux-arcade',
    title: 'Mini-jeux d’arcade',
    repositoryName: 'JavaScript-MiniJeux_Arcades',
    type: 'Jeux web',
    summary:
      'Collection de trois jeux jouables dans le navigateur : pierre-feuille-ciseaux, morpion et infinite runner.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    links: [
      {
        label: 'Code source',
        url: 'https://github.com/BTS-Projets/JavaScript-MiniJeux_Arcades',
        kind: 'repository',
      },
      { label: 'Voir la démo', url: 'https://bts.paulmuller.dev/JavaScript-MiniJeux_Arcades/', kind: 'demo' },
    ],
  }),
  btsProject({
    id: 'application-meteo',
    title: 'Application météo',
    repositoryName: 'APP-Meteo_Dynamique',
    type: 'Application web',
    summary:
      'Application de recherche affichant les conditions météorologiques actuelles d’une ville à partir de l’API OpenWeatherMap.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'API REST'],
    links: [
      { label: 'Code source', url: 'https://github.com/BTS-Projets/APP-Meteo_Dynamique', kind: 'repository' },
      { label: 'Voir la démo', url: 'https://bts.paulmuller.dev/APP-Meteo_Dynamique/', kind: 'demo' },
    ],
  }),
  btsProject({
    id: 'kyoto-tours',
    title: 'Kyoto Tours',
    repositoryName: 'Site-Kyoto',
    type: 'Site vitrine',
    summary:
      'Site de présentation touristique consacré à Kyoto, avec navigation responsive, offres de visite et formulaire de contact.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    links: [
      { label: 'Code source', url: 'https://github.com/BTS-Projets/Site-Kyoto', kind: 'repository' },
      { label: 'Voir la démo', url: 'https://bts.paulmuller.dev/Site-Kyoto/', kind: 'demo' },
    ],
  }),
  btsProject({
    id: 'petites-annonces',
    title: 'Petites Annonces',
    repositoryName: 'APP-Petites_Annonces',
    type: 'Application web',
    summary:
      'Interface d’annonces avec recherche, ajout et suppression, enregistrées dans le stockage local du navigateur.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'LocalStorage'],
    links: [
      { label: 'Code source', url: 'https://github.com/BTS-Projets/APP-Petites_Annonces', kind: 'repository' },
      { label: 'Voir la démo', url: 'https://bts.paulmuller.dev/APP-Petites_Annonces/', kind: 'demo' },
    ],
  }),
  btsProject({
    id: 'jeu-cible',
    title: 'Jeu de la cible',
    repositoryName: 'JavaScript-JeuCible',
    type: 'Jeu web',
    summary:
      'Jeu chronométré dans lequel il faut cliquer sur une cible mobile, avec trois difficultés et sauvegarde du meilleur score.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'LocalStorage'],
    links: [
      { label: 'Code source', url: 'https://github.com/BTS-Projets/JavaScript-JeuCible', kind: 'repository' },
      { label: 'Voir la démo', url: 'https://bts.paulmuller.dev/JavaScript-JeuCible/', kind: 'demo' },
    ],
  }),
  btsProject({
    id: 'decouverte-github',
    title: 'Découverte de GitHub',
    repositoryName: 'TP-Decouverte_GitHub',
    type: 'TP d’apprentissage',
    summary: 'Travail pratique d’initiation à GitHub à partir d’une page web simple.',
    technologies: ['HTML', 'CSS'],
    links: [
      { label: 'Code source', url: 'https://github.com/BTS-Projets/TP-Decouverte_GitHub', kind: 'repository' },
      { label: 'Voir la démo', url: 'https://bts.paulmuller.dev/TP-Decouverte_GitHub/', kind: 'demo' },
    ],
    isLearningExercise: true,
  }),
  {
    id: 'stage-bp2i',
    title: 'Stage de première année — BP2I',
    type: 'Expérience professionnelle',
    category: 'stage',
    origin: 'Stage',
    period: 'Juin — juillet 2026 · 6 semaines',
    summary:
      'Découverte d’une organisation informatique professionnelle et contribution encadrée à une application web existante.',
    technologies: ['Python 3', 'SQLAlchemy', 'Poetry', 'Alembic', 'Svelte', 'CSS', 'Tailwind', 'Git', 'GitLab'],
    links: [],
    e5Candidate: true,
    competencyIds: [],
    details: {
      context: 'Stage effectué à Montreuil chez BP2I, entité du groupe BNP Paribas.',
      objective: 'Découvrir le fonctionnement d’une organisation informatique professionnelle et contribuer à un travail confié par l’équipe.',
      work: [
        'Mise en place d’un environnement de développement local.',
        'Entraînement en Python 3 avec SQLAlchemy, Poetry et Alembic.',
        'Découverte de Svelte et intervention sur une application web existante.',
        'Correction CSS/Tailwind d’un problème d’interface sur une branche Git dédiée.',
        'Push de la branche et résolution d’un problème de merge.',
      ],
      methods: [
        'Participation à des réunions d’équipe en contexte Agile.',
        'Utilisation de Git et GitLab.',
        'Découverte du support informatique et de pratiques liées à ITIL.',
      ],
      constraints: [
        'La présentation publique exclut tout code, ticket, lien, capture, architecture ou procédure interne.',
      ],
      lessons: [
        'Découverte de Grafana, Prometheus, Sysdig et Kubernetes à un niveau d’observation et d’apprentissage.',
      ],
    },
  },
  {
    id: 'heavencube',
    title: 'HeavenCube',
    type: 'Projet personnel de longue durée',
    category: 'personal',
    origin: 'Personnel',
    period: 'En cours',
    summary:
      'Projet autour d’un serveur Minecraft associant gestion de projet et de communauté, infrastructure, développement et intégration de fonctionnalités.',
    technologies: ['Java', 'PaperMC', 'Velocity', 'Maven', 'Gradle'],
    links: [{ label: 'Visiter le site', url: 'https://heavencube.fr/', kind: 'website' }],
    e5Candidate: false,
    competencyIds: [],
    details: {
      context: 'Projet personnel mené sur la durée autour d’un serveur Minecraft.',
      contribution: [
        'Participation à la gestion du projet et de la communauté.',
        'Développement et intégration de fonctionnalités.',
        'Travail autour de l’infrastructure, sans publication de détails sensibles.',
      ],
    },
  },
  {
    id: 'portfolio-loupsauvage',
    title: 'Portfolio LoupSauvage',
    type: 'Projet technique',
    category: 'personal',
    origin: 'Personnel',
    period: '2026',
    summary:
      'Monorepo public réunissant un frontend React, TypeScript et Vite, ainsi qu’une API PHP avec MariaDB et des workflows GitHub Actions.',
    technologies: ['React', 'TypeScript', 'Vite', 'PHP', 'MariaDB', 'GitHub Actions'],
    links: [
      {
        label: 'Repository public',
        url: 'https://github.com/NoltoxGit/portfolio-loupsauvage',
        kind: 'repository',
      },
    ],
    e5Candidate: false,
    competencyIds: [],
    details: {
      context: 'Projet technique destiné au portfolio de LoupSauvage et à ses outils de gestion.',
      constraints: [
        'Seules les parties décrites comme publiques dans le repository sont présentées ici.',
        'Les accès, jetons et composants d’usage privé ne sont pas exposés.',
      ],
    },
  },
  {
    id: 'distributeur-couverts',
    title: 'Distributeur automatique de couverts',
    type: 'Projet technique de Terminale',
    category: 'prior',
    origin: 'Antérieur au BTS',
    period: 'Terminale STI2D',
    summary:
      'Prototype réalisé en binôme pour distribuer automatiquement des couverts lors du passage d’un plateau et réduire les manipulations.',
    technologies: ['Arduino Uno', 'C/C++ Arduino', 'Tinkercad', 'LCD I2C', 'LiquidCrystal_I2C', 'Wire', 'PWM'],
    links: [],
    e5Candidate: false,
    competencyIds: [],
    details: {
      context: 'Projet technique de Terminale STI2D, réalisé en binôme et antérieur au BTS.',
      objective:
        'Concevoir un prototype distribuant automatiquement des couverts lorsqu’un plateau est détecté.',
      contribution: [
        'Prise en charge de la partie informatique et programmation.',
        'Recherche et comparaison de solutions de détection de la présence d’un plateau.',
        'Choix et mise en œuvre de la solution de détection.',
        'Définition de l’ordre de déclenchement du distributeur.',
        'Développement du programme Arduino.',
      ],
      work: [
        'Affichage du nombre de couverts restants sur un écran LCD I2C.',
        'Gestion de la détection du plateau et de la commande moteur par PWM.',
        'Gestion d’indicateurs lumineux, d’un avertissement sonore et de la remise à zéro du stock.',
        'Simulation avec Tinkercad et utilisation d’un émetteur/récepteur laser.',
      ],
      constraints: [
        'La capacité n’est volontairement pas chiffrée : les documents d’étude et le prototype logiciel ne donnent pas la même valeur.',
        'Les documents sources complets ne sont pas publiés automatiquement.',
      ],
    },
  },
]

export const projectCategoryLabels: Record<Project['category'], string> = {
  bts1: 'BTS 1',
  bts2: 'BTS 2',
  stage: 'Stage',
  personal: 'Personnel',
  prior: 'Projet antérieur',
}
