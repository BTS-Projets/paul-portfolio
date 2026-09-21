<script lang="ts">
  import { profile } from '$lib/data/profile'
</script>

<section id="accueil" class="hero section-shell" aria-labelledby="hero-title">
  <div class="hero-content">
    <p class="eyebrow">Portfolio professionnel · 2025 — 2027</p>
    <h1 id="hero-title">Développement logiciel,<br /><span>projets et progression.</span></h1>
    <p class="hero-lead">{profile.introduction}</p>
    <p class="hero-course">
      <strong>{profile.currentEducation}</strong><br />
      {profile.option}
    </p>
    <div class="action-row">
      <a class="button button-primary" href="#realisations">Voir mes réalisations</a>
      <a class="button button-secondary" href="#parcours-e5">Parcours E5</a>
      <a class="text-link" href="https://github.com/NoltoxGit" target="_blank" rel="noopener noreferrer">
        GitHub <span aria-hidden="true">↗</span>
      </a>
    </div>
  </div>

  <aside class="hero-summary" aria-label="Repères du portfolio">
    <div class="summary-heading">
      <span class="status-dot" aria-hidden="true"></span>
      <span>Formation en cours</span>
    </div>
    <dl>
      <div>
        <dt>Parcours</dt>
        <dd>BTS SIO SLAM</dd>
      </div>
      <div>
        <dt>Période</dt>
        <dd>{profile.period}</dd>
      </div>
      <div>
        <dt>Portfolio E5</dt>
        <dd>6 compétences configurables</dd>
      </div>
      <div>
        <dt>Disponibilité</dt>
        <dd>Site statique consultable hors API</dd>
      </div>
    </dl>
  </aside>
</section>
