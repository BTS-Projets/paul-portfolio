<script lang="ts">
  import { profile } from '$lib/data/profil'
</script>

<section id="accueil" class="hero section-shell" aria-labelledby="hero-title">
  <div class="hero-content">
    <p class="eyebrow">Portfolio professionnel · {profile.period}</p>
    <h1 id="hero-title">Paul Muller</h1>
    <p class="hero-role">Étudiant en BTS SIO · option SLAM</p>
    <p class="hero-lead">{profile.introduction}</p>
    <div class="action-row">
      <a class="button button-primary" href="#parcours">Voir mon parcours</a>
      <a
        class="button button-secondary"
        href="https://bts.paulmuller.dev/"
        target="_blank"
        rel="external noopener noreferrer"
      >
        Réalisations BTS <span aria-hidden="true">↗</span>
      </a>
      <a class="text-link" href="#tableau-synthese">Tableau de synthèse</a>
    </div>
  </div>

  <aside class="hero-summary" aria-label="Formation actuelle">
    <p class="summary-kicker">Formation en cours</p>
    <h2>{profile.currentEducation}</h2>
    <p>{profile.option}</p>
    <dl>
      <div>
        <dt>Période</dt>
        <dd>{profile.period}</dd>
      </div>
      <div>
        <dt>Orientation</dt>
        <dd>Développement logiciel et web</dd>
      </div>
    </dl>
  </aside>
</section>
