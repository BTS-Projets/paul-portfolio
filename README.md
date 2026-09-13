# Portfolio professionnel de Paul Muller

Portfolio statique principal de Paul Muller, étudiant en BTS SIO option SLAM (2025-2027). Le site présente le parcours, les réalisations, l’expérience professionnelle, la veille et une représentation configurable des compétences de l’épreuve E5.

La matrice web E5 facilite la navigation : elle ne remplace pas le tableau de synthèse officiel de l’Éducation nationale.

## Stack

- Vue.js 3 avec Composition API
- TypeScript
- Vite
- CSS natif structuré
- ESLint et `vue-tsc`
- GitHub Pages

## Commandes

```bash
npm ci
npm run dev
npm run lint
npm run typecheck
npm run build
```

Le build statique est généré dans `dist/`.

## Organisation

```text
src/
├── components/   Composants réutilisables
├── composables/  Logique de thème
├── data/         Contenu éditorial typé
├── sections/     Grandes sections de la page
├── styles/       Feuille de style globale et impression
└── types/        Interfaces TypeScript
public/
└── documents/    Documents explicitement destinés au public
```

## Maintenir le contenu

### Ajouter une réalisation

Ajouter un objet conforme à l’interface `Project` dans `src/data/projects.ts`. Les champs détaillés sont facultatifs : l’interface n’affiche pas les blocs absents. Utiliser `category: 'bts2'` pour une future réalisation de deuxième année.

### Associer une compétence E5

Après validation manuelle, ajouter l’identifiant concerné (`B1.1` à `B1.6`) dans `competencyIds` du projet. Ne pas déduire automatiquement une compétence à partir des technologies utilisées. `e5Candidate` détermine si la réalisation apparaît dans la matrice.

### Ajouter une entrée de veille

Définir le sujet dans `src/data/watch.ts`, puis ajouter un objet `WatchEntry` avec une vraie date, une source nommée et une URL vérifiable. Aucune entrée non sourcée ne doit être publiée.

### Ajouter un document

1. Placer le fichier public dans `public/documents/`.
2. Le déclarer dans `src/data/documents.ts`.
3. Vérifier qu’il ne contient aucune donnée confidentielle.

## GitHub Pages et domaine

Le workflow `.github/workflows/deploy-pages.yml` installe avec `npm ci`, exécute le lint et le typecheck, construit le site, puis publie `dist/` avec les actions GitHub Pages officielles. Vite utilise des chemins d’assets relatifs afin de fonctionner avec le domaine personnalisé comme avec l’URL Pages du repository.

Le domaine confirmé `paulmuller.dev` est déclaré dans `public/CNAME`. Pour le modifier, mettre à jour ce fichier, les balises `canonical` et `og:url` dans `index.html`, puis configurer le même domaine dans les paramètres GitHub Pages et chez le fournisseur DNS.

## Confidentialité

Aucune note brute, capture interne, ticket, code, lien privé, procédure ou donnée d’infrastructure issue d’un stage ne doit être commitée. Seuls les documents explicitement préparés pour une publication publique peuvent être placés dans `public/`.

Les informations restant à compléter sont centralisées dans [CONTENT_TODO.md](CONTENT_TODO.md).
