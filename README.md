# Portfolio professionnel de Paul Muller

Portfolio statique de Paul Muller, étudiant en BTS SIO option SLAM (2025-2027). Le site présente le parcours, les réalisations, l’expérience professionnelle, la veille et une représentation configurable des compétences de l’épreuve E5.

La matrice web E5 facilite la navigation : elle ne remplace pas le tableau de synthèse officiel de l’Éducation nationale.

## Stack

- Svelte 5 et SvelteKit 2 avec runes
- TypeScript strict et Vite
- `@sveltejs/adapter-static`
- CSS natif
- ESLint, Prettier et `svelte-check`
- Playwright pour les parcours E2E critiques
- GitHub Pages

## Commandes

```bash
npm ci
npm run dev
npm run lint
npm run check
npm run build
npx playwright install chromium
npm run test:e2e
```

Le build statique précompressé est généré dans `build/`.

## Organisation

```text
src/
├── lib/
│   ├── components/  Composants réutilisables
│   ├── data/        Contenu éditorial typé
│   ├── sections/    Grandes sections de la page
│   ├── styles/      Feuille de style globale et impression
│   └── types/       Interfaces TypeScript
├── routes/          Route statique et layout global
└── app.html         Gabarit HTML et initialisation du thème
static/
├── documents/       Documents explicitement destinés au public
├── CNAME            Domaine GitHub Pages
└── favicon.svg
```

## Maintenir le contenu

### Ajouter une réalisation

Ajouter un objet conforme à l’interface `Project` dans `src/lib/data/projects.ts`. Les champs détaillés sont facultatifs : l’interface n’affiche pas les blocs absents. Utiliser `category: 'bts2'` pour une future réalisation de deuxième année.

### Associer une compétence E5

Après validation manuelle, ajouter l’identifiant concerné (`B1.1` à `B1.6`) dans `competencyIds` du projet. Ne pas déduire automatiquement une compétence à partir des technologies utilisées. `e5Candidate` détermine si la réalisation apparaît dans la matrice.

### Ajouter une entrée de veille

Définir le sujet dans `src/lib/data/watch.ts`, puis ajouter un objet `WatchEntry` avec une vraie date, une source nommée et une URL vérifiable. Aucune entrée non sourcée ne doit être publiée.

### Ajouter un document

1. Placer le fichier public dans `static/documents/`.
2. Le déclarer dans `src/lib/data/documents.ts`.
3. Vérifier qu’il ne contient aucune donnée confidentielle.

## GitHub Pages et domaine

Le workflow `.github/workflows/deploy-pages.yml` installe les dépendances, exécute le lint, `svelte-check`, le build et les tests E2E, puis publie `build/` avec les actions GitHub Pages officielles. Le site est entièrement prérendu et les chemins d’assets restent relatifs pour fonctionner avec le domaine personnalisé comme avec l’URL Pages du repository.

Le domaine `paulmuller.dev` est déclaré dans `static/CNAME`. Pour le modifier, mettre à jour ce fichier ainsi que les balises `canonical` et `og:url`, puis configurer le même domaine dans les paramètres GitHub Pages et chez le fournisseur DNS.

## Confidentialité

Aucune note brute, capture interne, ticket, code, lien privé, procédure ou donnée d’infrastructure issue d’un stage ne doit être commitée. Seuls les documents explicitement préparés pour une publication publique peuvent être placés dans `static/`.

Les informations restant à compléter sont centralisées dans [CONTENT_TODO.md](CONTENT_TODO.md).
