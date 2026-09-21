# Portfolio professionnel de Paul Muller

Portfolio statique de soutenance de Paul Muller, étudiant en BTS SIO option SLAM (2025-2027). Le site privilégie une lecture claire sur vidéo-projecteur : profil, parcours, compétences, expérience, veille et tableau de synthèse officiel.

Les réalisations BTS détaillées sont présentées séparément sur [bts.paulmuller.dev](https://bts.paulmuller.dev/).

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
│   ├── components/  Sidebar et composants réutilisables
│   ├── data/        Contenu éditorial typé
│   ├── sections/    Sections de la soutenance
│   ├── styles/      Design, responsive et impression
│   └── types/       Modèles TypeScript
├── routes/          Route statique et layout global
└── app.html         Gabarit HTML global
static/
├── documents/       Documents explicitement destinés au public
├── CNAME            Domaine GitHub Pages
└── favicon.svg
```

Le modèle `Experience` accepte un `detailPath` facultatif au format `/experiences/<slug>`. Une page détaillée pourra ainsi être liée lorsque son contenu public sera disponible, sans modifier la section principale.

## Maintenir le contenu

### Ajouter une expérience

Ajouter un objet conforme à `Experience` dans `src/lib/data/experiences.ts`. La page d’accueil reste synthétique : contexte, résumé, domaines et technologies. Renseigner `detailPath` uniquement lorsqu’une route détaillée existe réellement.

### Ajouter une entrée de veille

Définir le sujet et l’objectif dans `src/lib/data/veille.ts`, puis ajouter un objet `WatchEntry` avec une vraie date, une source nommée et une URL vérifiable.

### Publier le tableau de synthèse E5

Placer le document officiel à l’emplacement exact :

```text
static/documents/tableau-synthese-e5.pdf
```

La section utilise le viewer PDF natif du navigateur et fournit des liens d’ouverture et de téléchargement. Aucun faux document ne doit être ajouté pour remplir cet emplacement.

## GitHub Pages et domaine

Le workflow `.github/workflows/deploy-pages.yml` installe les dépendances, exécute le lint, `svelte-check`, le build et les tests E2E, puis publie `build/` avec les actions GitHub Pages officielles.

Le domaine `paulmuller.dev` reste déclaré dans `static/CNAME`. Le site est entièrement prérendu et les chemins d’assets restent compatibles avec GitHub Pages.

## Confidentialité

Aucune note brute, capture interne, ticket, code, lien privé, procédure ou donnée d’infrastructure issue d’un stage ne doit être commitée. Seuls les documents explicitement préparés pour une publication publique peuvent être placés dans `static/`.

Les informations restant à compléter sont centralisées dans [CONTENT_TODO.md](CONTENT_TODO.md).
