import type { Profile } from '../types'

export const profile: Profile = {
  name: 'Paul Muller',
  currentEducation: 'BTS Services Informatiques aux Organisations',
  option: 'Option SLAM — Solutions Logicielles et Applications Métiers',
  period: '2025 — 2027',
  introduction:
    'Étudiant en BTS SIO option SLAM, je développe des applications web et logicielles dans le cadre de ma formation et de projets personnels.',
  about: [
    'Étudiant français en informatique, je progresse principalement par la réalisation de projets concrets.',
    'Mes activités portent sur le développement web et logiciel, l’automatisation, l’écosystème Minecraft et des contributions open source.',
    'Je participe également à la gestion et au développement du projet HeavenCube.',
  ],
  email: 'pro.paulmuller@gmail.com',
  website: 'https://paulmuller.dev/',
  socialLinks: [
    { label: 'GitHub', url: 'https://github.com/NoltoxGit' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/paul-muller-213349326/' },
    { label: 'Organisation BTS-Projets', url: 'https://github.com/BTS-Projets' },
  ],
  // TODO: renseigner le projet professionnel après le BTS lorsqu'il sera défini.
}
